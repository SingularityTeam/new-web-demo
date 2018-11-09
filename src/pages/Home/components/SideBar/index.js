import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { changeCollapsed, changeKeyPath } from 'Actions/home';
import { Logo } from './style';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const SideBar = withRouter(({ isCollapsed, handleCollapse, keyPath, handleChangeKeyPath, history }) => {
  const { pathname } = history.location;
  const keyPathName = pathname === '/' ? ['/discover'] : [pathname];

  return (
    <Sider collapsible collapsed={isCollapsed} onCollapse={handleCollapse}>
      <Logo />
      <Menu theme="dark" selectedKeys={keyPathName || keyPath} mode="inline" onClick={handleChangeKeyPath}>
        <Item key="/discover">
          <Link to="/discover">
            <Icon type="search" />
            <span>搜索</span>
          </Link>
        </Item>
        <Item key="/visualize">
          <Link to="/visualize">
            <Icon type="eye" />
            <span>可视化</span>
          </Link>
        </Item>
        <SubMenu
          key="3"
          title={
            <span>
              <Icon type="database" />
              <span>数据源</span>
            </span>
          }
        >
          <Item key="31">TCP/UDP上传</Item>
          <Item key="32">本地上传</Item>
          <Item key="33">远程采集</Item>
          <Item key="34">代理上传</Item>
          <SubMenu key="35" title="Agent管理">
            <Item key="351">主机</Item>
            <Item key="352">配置模板</Item>
            <Item key="353">主机组</Item>
            <Item key="354">认证信息</Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="4"
          title={
            <span>
              <Icon type="warning" />
              <span>告警</span>
            </span>
          }
        >
          <Item key="41">告警记录</Item>
          <Item key="42">告警策略</Item>
        </SubMenu>
        <Item key="/dashboard">
          <Link to="/dashboard">
            <Icon type="dashboard" />
            <span>仪表盘</span>
          </Link>
        </Item>
        <SubMenu
          key="6"
          title={
            <span>
              <Icon type="setting" />
              <span>管理</span>
            </span>
          }
        >
          <Item key="61">日志分组</Item>
          <Item key="62">对象管理</Item>
          <Item key="63">高级设置</Item>
          <SubMenu key="64" title="权限管理">
            <Item key="641">用户管理</Item>
            <Item key="642">角色管理</Item>
            <Item key="643">权责模式</Item>
          </SubMenu>
          <Item key="65">审计日志</Item>
          <SubMenu key="66" title="系统配置">
            <Item key="661">登录配置</Item>
            <Item key="662">系统配置</Item>
            <Item key="663">白名单</Item>
          </SubMenu>
          <SubMenu key="67" title="备份设置">
            <Item key="671">备份</Item>
            <Item key="672">备份策略</Item>
            <Item key="673">恢复</Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Sider>
  );
});

SideBar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  handleCollapse: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isCollapsed: state.getIn(['home', 'isCollapsed']),
  keyPath: state.getIn(['home', 'keyPath'])
});

const mapStateToDispatch = dispatch => ({
  handleCollapse: () => dispatch(changeCollapsed()),
  handleChangeKeyPath: ({ keyPath }) => dispatch(changeKeyPath(keyPath))
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(SideBar);
