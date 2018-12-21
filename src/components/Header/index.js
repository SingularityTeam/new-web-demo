import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Button, message, Divider, Icon } from 'antd';
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
      <Col offset={20} span={4}>
        
        <span>简体中文</span>
        <Divider type="vertical" />
        <span>用户名</span>
        <Divider type="vertical" />
        <span>关于</span>
      </Col>
      {/* <Col span={2}>
        <Button onClick={logout}>用户名</Button>
      </Col>
      <Col span={2}>
        <Button onClick={logout}>关于</Button>
      </Col> */}
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
