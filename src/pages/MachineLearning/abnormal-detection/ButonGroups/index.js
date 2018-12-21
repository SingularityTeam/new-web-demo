import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button, Input } from 'antd';

const { Search } = Input;

const ButtonGroups = ({ match }) => (
  <div className="button-groups">
    <Button type="primary">
      <NavLink to={`${match.path}/new`}>新建</NavLink>
    </Button>
    <Button>导入</Button>
    <Button>导出</Button>
    <Button>导出全部</Button>
    <Search placeholder="请输入任务描述关键字" />
  </div>
);

ButtonGroups.propTypes = {
  match: PropTypes.object
};

export default ButtonGroups;
