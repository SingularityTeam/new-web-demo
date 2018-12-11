import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Button, message } from 'antd';
import { setLoggedUser } from 'Actions/login';
import './style.less';

const Header = ({ logoutApp, history }) => {
  const logout = () => {
    setTimeout(() => {
      logoutApp(false);
      history.push('/');
      message.info('退出登录成功');
    }, 500);
  };

  return (
    <Row className="header-wrapper">
      <Col offset={22} span={2}>
        <Button onClick={logout}>退出登录</Button>
      </Col>
    </Row>
  );
};

Header.propTypes = {
  history: PropTypes.object,
  logoutApp: PropTypes.func.isRequired
};

const mapStateToDispatch = dispatch => ({
  logoutApp: logged => dispatch(setLoggedUser(logged))
});

export default connect(
  null,
  mapStateToDispatch
)(Header);
