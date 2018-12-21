import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button, Table } from 'antd';
import columns from './columns';

const UserAuthority = ({ match }) => (
  <Fragment>
    <NavLink to={`${match.path}/user/new`}>
      <Button type="primary" icon="plus">
        新建
      </Button>
    </NavLink>

    <Table columns={columns} dataSource={[]} />
  </Fragment>
);

UserAuthority.propTypes = {
  match: PropTypes.object
};

export default UserAuthority;
