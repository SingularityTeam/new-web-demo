import React from 'react';
import { Layout, Breadcrumb, Tabs } from 'antd';

const { Content } = Layout;
const { Item } = Breadcrumb;
const { TabPane } = Tabs;

const tabs = ['磁盘管理', 'RAID管理', '卷管理'];

const Storage = () => (
  <Content className="content-wrapper">
    <Breadcrumb className="breadcrumb-wrapper">
      <Item>首页</Item>
      <Item>管理</Item>
      <Item>系统管理</Item>
      <Item>存储管理</Item>
      <Item>磁盘管理</Item>
    </Breadcrumb>
    <div className="container-layout">
      <Tabs>
        {tabs.map(tab => (
          <TabPane tab={tab} key={tab}>
            content
          </TabPane>
        ))}
      </Tabs>
    </div>
  </Content>
);

export default Storage;
