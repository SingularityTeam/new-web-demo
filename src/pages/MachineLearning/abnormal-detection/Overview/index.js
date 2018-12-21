import React from 'react';
import { Row, Col, Card } from 'antd';
import OverviewCard from './Card';

const Overview = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="任务概览">
        <OverviewCard cardInfo={{ title: '总数', count: 139, color: '#1faf9d' }} />
        <OverviewCard cardInfo={{ title: '开启', count: 138, color: '#0a900a' }} />
        <OverviewCard cardInfo={{ title: '关闭', count: 1, color: '#9fa79f' }} />
      </Card>
    </Col>
    <Col span={8}>
      <Card title="执行概览">
        <OverviewCard cardInfo={{ title: '总数', count: 139, color: '#1faf9d' }} />
        <OverviewCard cardInfo={{ title: '成功', count: 138, color: '#0a900a' }} />
        <OverviewCard cardInfo={{ title: '失败', count: 1, color: '#f91521' }} />
      </Card>
    </Col>
  </Row>);

export default Overview;
