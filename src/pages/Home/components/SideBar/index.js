import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

class SideBar extends PureComponent {
  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object
  };

  state = {
    isCollapsed: false // 侧边栏折叠状态
  };

  handleCollapse = () => {
    this.setState(() => ({
      isCollapsed: !this.state.isCollapsed
    }));
  };

  render() {
    const { match, history } = this.props;
    const { isCollapsed } = this.state;
    const { pathname } = history.location;
    console.log(pathname, match.path);
    // 根据路由来匹配侧边栏菜单高亮
    const selectedKeys = pathname === match.path ? `${match.path}/discover` : pathname;

    return (
      <Sider collapsible collapsed={isCollapsed} onCollapse={this.handleCollapse}>
        <div className="home-logo" />
        <Menu theme="dark" mode="inline" selectedKeys={[selectedKeys]}>
          <Item key={`${match.path}/discover`}>
            <NavLink to={`${match.path}/discover`}>
              <Icon type="search" />
              <span>搜索</span>
            </NavLink>
          </Item>
          <Item key={`${match.path}/visualize`}>
            <NavLink to={`${match.path}/visualize`}>
              <Icon type="eye" />
              <span>可视化</span>
            </NavLink>
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
          <Item key={`${match.path}/dashboard`}>
            <NavLink to={`${match.path}/dashboard`}>
              <Icon type="dashboard" />
              <span>仪表盘</span>
            </NavLink>
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
              <Item key="664">
                <NavLink to={`${match.path}/management/sysconfig/licence`}>许可证管理</NavLink>
              </Item>
              <Item key="665">
                <NavLink to={`${match.path}/management/sysconfig/snmp`}>SMTP配置</NavLink>
              </Item>
            </SubMenu>
            <SubMenu key="67" title="备份设置">
              <Item key="671">备份</Item>
              <Item key="672">备份策略</Item>
              <Item key="673">恢复</Item>
            </SubMenu>
            <SubMenu key={`${match.path}/management/sysmanage/storage`} title="系统管理">
              <Item key={`${match.path}/management/sysmanage/storage`}>
                <NavLink to={`${match.path}/management/sysmanage/storage`}>存储管理</NavLink>
              </Item>
              <Item key={`${match.path}/management/sysmanage/container`}>
                <NavLink to={`${match.path}/management/sysmanage/container`}>容器及服务管理</NavLink>
              </Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default SideBar;
