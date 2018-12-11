import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import TopNav from './component/TopNav';
import LoginForm from './component/LoginForm';
import './style.less';

const Login = ({ history }) => (
  <Row>
    <Col span={8}>背景图Logo</Col>
    <Col span={16}>
      <Row>
        <Col span={6} offset={18}>
          <TopNav />
        </Col>
      </Row>
      <Row>
        <LoginForm history={history} />
      </Row>
    </Col>
  </Row>
);

Login.propTypes = {
  history: PropTypes.object
};

export default Login;
