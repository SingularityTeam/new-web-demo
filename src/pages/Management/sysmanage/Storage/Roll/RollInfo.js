import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '卷名称',
    dataIndex: 'rollName',
    width: '15%'
  },
  {
    title: '使用率',
    dataIndex: 'usageRate',
    width: '10%'
  },
  {
    title: '容量',
    dataIndex: 'capacity',
    width: '10%'
  },
  {
    title: '可用空间',
    dataIndex: 'availableSpace',
    width: '15%'
  },
  {
    title: '所属设备',
    dataIndex: 'device',
    width: '10%'
  },
  {
    title: '卷类型',
    dataIndex: 'type',
    width: '10%'
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: '10%'
  },
  {
    title: '操作',
    dataIndex: 'operate',
    width: '20%'
  }
];

const data = [];

const RollInfo = () => (
  <Table
    bordered
    columns={columns}
    rowKey={record => record}
    dataSource={data}
    // loading={loading}
  />
);

export default RollInfo;
