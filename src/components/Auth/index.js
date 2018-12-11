import React from 'react';
import PropTyoes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// 登录鉴权，没有登录前不能访问 home 中的组件
const AuthorizedRoute = ({ component: Component, logged, ...rest }) => (
  <Route {...rest} render={props => (logged ? <Component {...props} /> : <Redirect to="/login" />)} />
);

AuthorizedRoute.propTypes = {
  component: PropTyoes.any.isRequired,
  logged: PropTyoes.bool.isRequired
};

const mapStateToProps = state => ({
  logged: state.getIn(['login', 'logged'])
});

export default connect(
  mapStateToProps,
  null
)(AuthorizedRoute);
