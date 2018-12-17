import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Layout, Menu, Tabs } from 'antd';
import Breadcrumbs from 'Components/Breadcrumbs';
import Disk from './Disk';
import Raid from './Raid';
import Roll from './Roll';
import '../../style.less';

const { Content } = Layout;
const MenuItem = Menu.Item;
const { TabPane } = Tabs;

// const tabs = ['磁盘管理', 'RAID管理', '卷管理'];
const items = [
  { key: 'disk', title: '磁盘管理' },
  { key: 'raid', title: 'RAID管理' },
  { key: 'roll', title: '卷管理' }
];

const Storage = ({ match, history }) => {
  const { pathname } = history.location;
  // 根据路由来匹配侧边栏菜单高亮
  const selectedKeys = pathname === match.path ? `${match.path}/disk` : pathname;

  return (
    <Content className="content-wrapper">
      <Breadcrumbs pathname={pathname} />

      <div className="container-layout">
        {/* <Tabs>
        {tabs.map(tab => (
          <TabPane tab={tab} key={tab}>
            content
          </TabPane>
        ))}
      </Tabs> */}
        <Menu mode="horizontal" selectedKeys={[selectedKeys]}>
          {items.map(({ key, title }) => (
            <MenuItem key={`${match.path}/${key}`}>
              <NavLink to={`${match.path}/${key}`}>{title}</NavLink>
            </MenuItem>
          ))}
        </Menu>

        <div className="storage-layout">
          <Switch>
            <Route path={match.path} exact component={Disk} />
            <Route path={`${match.path}/disk`} component={Disk} />
            <Route path={`${match.path}/raid`} component={Raid} />
            <Route path={`${match.path}/roll`} component={Roll} />
          </Switch>
        </div>
      </div>
    </Content>
  );
};

Storage.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
};

export default Storage;
