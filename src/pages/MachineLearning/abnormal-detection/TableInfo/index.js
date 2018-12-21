import React from 'react';
import { Table, Divider, Switch, Badge } from 'antd';

const columns = [
  {
    title: '任务名称',
    dataIndex: 'title'
  },
  {
    title: '已有搜索',
    dataIndex: 'search'
  },
  {
    title: '算法',
    dataIndex: 'algorithm'
  },
  {
    title: '执行频率',
    dataIndex: 'frequency'
  },
  {
    title: '最近执行时间',
    dataIndex: 'recentDate'
  },
  {
    title: '执行情况',
    dataIndex: 'situation',
    render: text => (
      <span className="execute-situation">
        <Badge status="success" text={`成功：${text.success}`} />
        <Badge status="error" text={`失败：${text.error}`} />
      </span>
    )
  },
  {
    title: '任务状态',
    dataIndex: 'status',
    render: text => <Switch defaultChecked={text} />
  },
  {
    title: '操作',
    dataIndex: 'operate',
    render: () => (
      <span>
        <a href="javascript:;">编辑</a>
        <Divider type="vertical" />
        <a href="javascript:;">查看</a>
        <Divider type="vertical" />
        <a href="javascript:;">删除</a>
      </span>
    )
  }
];

const data = [
  {
    key: '1',
    title: '任务1',
    search: 'XXXX日志',
    algorithm: '马氏距离',
    frequency: '每1小时',
    recentDate: '2018-12-14 11:52:29',
    situation: { success: 120, error: 0 },
    status: false
  },
  {
    key: '2',
    title: '任务2',
    search: 'vCenter',
    algorithm: '马氏距离',
    frequency: '每天',
    recentDate: '2018-12-13 23:00:00',
    situation: { success: 12, error: 1 },
    status: true
  },
  {
    key: '3',
    title: '任务3',
    search: 'Oracle',
    algorithm: '马氏距离',
    frequency: '每2天',
    recentDate: '2018-12-13 23:00:00',
    situation: { success: 6, error: 0 },
    status: true
  }
];

const rowSelection = {};

const pagination = {
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: total => `共1条`
};

const TableInfo = () => (
  <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={pagination} />
);

export default TableInfo;
