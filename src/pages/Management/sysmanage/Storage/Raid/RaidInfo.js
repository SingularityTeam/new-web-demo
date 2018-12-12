import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'RAID名称',
    dataIndex: 'raidName',
    width: '25%'
  },
  {
    title: 'RAID级别',
    dataIndex: 'raidLevel',
    width: '20%'
  },
  {
    title: '容量',
    dataIndex: 'capacity',
    width: '20%'
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: '15%'
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
