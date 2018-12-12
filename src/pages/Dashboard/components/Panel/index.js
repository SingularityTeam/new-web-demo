import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Panel = ({ panels }) => (
  <div>
    {panels.toJS().map(({ id, title, Component }) => (
      <Fragment key={title}>{Component}</Fragment>
    ))}
  </div>
);

Panel.propTypes = {
  panels: PropTypes.any
};

const mapStateToProps = state => ({
  panels: state.getIn(['dashboard', 'panels'])
});

export default connect(
  mapStateToProps,
  null
)(Panel);
