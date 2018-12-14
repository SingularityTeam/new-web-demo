import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    width: '10%'
  },
  {
    title: '名称',
    dataIndex: 'name',
    width: '15%'
  },
  {
    title: '所属容器',
    dataIndex: 'container',
    width: '15%'
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: '10%'
  },
  {
    title: 'CPU占有率',
    dataIndex: 'cup',
    width: '15%'
  },
  {
    title: '内存占有率',
    dataIndex: 'ram',
    width: '15%'
  },
  {
    title: '操作',
    dataIndex: 'operate',
    width: '20%'
  }
];

const data = [];

const DiskInfo = () => (
  <Table
    bordered
    columns={columns}
    rowKey={record => record}
    dataSource={data}
    // loading={loading}
  />
);

export default DiskInfo;
