import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import ContainerInfo from './ContainerInfo';
import ServiceInfo from './ServiceInfo';

const { Content } = Layout;
const { Item } = Breadcrumb;

const Container = () => (
  <Content className="content-wrapper">
    <Breadcrumb className="breadcrumb-wrapper">
      <Item>首页</Item>
      <Item>管理</Item>
      <Item>系统管理</Item>
      <Item>容器及服务管理</Item>
    </Breadcrumb>
    <div className="container-layout">
      <div className="storage-layout">
        <div className="panel-wrapper">
          <div>容器管理</div>
          <ContainerInfo />
        </div>
        <div className="panel-wrapper">
          <div>服务管理</div>
          <ServiceInfo />
        </div>
      </div>
    </div>
  </Content>
);

export default Container;
