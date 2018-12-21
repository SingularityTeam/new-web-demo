import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Layout, Tabs } from 'antd'
import Breadcrumbs from 'Components/Breadcrumbs';
import UserAuthority from './user';
import NewUser from './user/NewUser';

const { Content } = Layout
const { TabPane } = Tabs;

const AuthorityManagement = ({ match }) => (
  <Content className="content-wrapper">
    <Breadcrumbs pathname={match.path} />

    <div className="container-layout">
      <Tabs>
        <TabPane tab="用户管理" key="user">
          <Switch>
            <Route exact path={match.path} component={UserAuthority} />
            <Route path={`${match.path}/user/new`} component={NewUser} />
          </Switch>
          {/* <UserAuthority /> */}
        </TabPane>
        <TabPane tab="角色管理" key="role">角色管理</TabPane>
      </Tabs>
    </div>
  </Content>
)

AuthorityManagement.propTypes = {
  match: PropTypes.object
}

export default AuthorityManagement;