import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const { Item } = Breadcrumb;

const itemMap = new Map([
  ['home', '首页'],
  ['management', '管理'],
  ['sysmanage', '系统管理'],
  ['storage', '存储管理'],
  ['disk', '磁盘管理'],
  ['raid', 'RAID管理'],
  ['roll', '卷管理']
]);

const Breadcrumbs = ({ pathname }) => {
  const breadcrumbItem = pathname.slice(1).split('/');

  return (
    <Breadcrumb className="breadcrumb-wrapper">
      {breadcrumbItem.map(item => (
        <Item key={item}>{itemMap.get(item)}</Item>
      ))}
    </Breadcrumb>
  );
};

Breadcrumbs.propTypes = {
  pathname: PropTypes.string
};

export default Breadcrumbs;
