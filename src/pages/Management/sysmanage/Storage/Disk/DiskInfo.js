import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: '槽位号',
    dataIndex: 'slotId',
    width: '10%'
  },
  {
    title: '序列号',
    dataIndex: 'serialId',
    width: '10%'
  },
  {
    title: '所属RAID',
    dataIndex: 'raid',
    width: '20%'
  },
  {
    title: '容量',
    dataIndex: 'capacity',
    width: '10%'
  },
  {
    title: '型号',
    dataIndex: 'model',
    width: '10%'
  },
  {
    title: '温度',
    dataIndex: 'temperature',
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

const DiskInfo = () => (
  <Table
    columns={columns}
    rowKey={record => record}
    dataSource={data}
    // loading={loading}
  />
);

export default DiskInfo;
