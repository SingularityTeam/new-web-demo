import React from 'react';
import { Divider } from 'antd';

const columns = [
  {
    title: '序号',
    dataIndex: 'userId'
  },
  {
    title: '用户名',
    dataIndex: 'uesrName'
  },
  {
    title: '显示名',
    dataIndex: 'displayName'
  },
  {
    title: '角色',
    dataIndex: 'role'
  },
  {
    title: '可用状态',
    dataIndex: 'status'
  },
  {
    title: '邮箱',
    dataIndex: 'email'
  },
  {
    title: '创建时间',
    dataIndex: 'cerateTime'
  },
  {
    title: '最近登录时间',
    dataIndex: 'loginTime'
  },
  {
    title: '操作',
    dataIndex: 'operate',
    render: () => (
      <span>
        <a href="javascript:;">禁用</a>
        <Divider type="vertical" />
        <a href="javascript:;">解锁</a>
        <Divider type="vertical" />
        <a href="javascript:;">修改</a>
        <Divider type="vertical" />
        <a href="javascript:;">删除</a>
      </span>
    )
  }
];

export default columns;
