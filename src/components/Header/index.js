import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, message, Divider, Icon } from 'antd';
import { setLoggedUser } from 'Actions/login';
import iconfont from 'Assets/iconfont';
import './style.less';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: iconfont
});

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
      <Col offset={20} span={4}>
        <IconFont type="icon-intl"></IconFont>
        <span>简体中文</span>
        <Divider type="vertical" />
        <IconFont type="icon-user"></IconFont>
        <span>用户名</span>
        <Divider type="vertical" />
        <IconFont type="icon-about"></IconFont>
        <span>关于</span>
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
