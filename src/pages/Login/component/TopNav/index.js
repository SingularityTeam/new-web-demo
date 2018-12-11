import React from 'react';
import { Row, Col, Menu, Dropdown, Button, Icon } from 'antd';

const { Item } = Menu;

const handleMenuClick = e => {
  // console.log(e);
};

const language = ['简体中文', '繁體中文', 'English'];

const menu = (
  <Menu onClick={handleMenuClick}>
    {language.map((lang, inedx) => (
      <Item key={inedx}>{lang}</Item>
    ))}
  </Menu>
);

const TopNav = () => (
  <Row className="login-top-nav">
    <Col span={12}>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button>
          {language[0]} <Icon type="down" />
        </Button>
      </Dropdown>
    </Col>
    <Col span={12}>
      <Button>后台管理系统</Button>
    </Col>
  </Row>
);

export default TopNav;
