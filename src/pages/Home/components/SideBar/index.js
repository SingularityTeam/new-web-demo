import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import iconfont from 'Assets/iconfont';
import ARLogo from 'Assets/images/ar_logo.png';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: iconfont
});

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
    // 根据路由来匹配侧边栏菜单高亮
    const selectedKeys = pathname === match.path ? `${match.path}/discover` : pathname;

    return (
      <Sider
        // trigger={null}
        collapsible
        collapsed={isCollapsed}
        onCollapse={this.handleCollapse}
        className={`fixed-sidebar ${isCollapsed ? 'collapse-sider-layout' : 'expand-sider-layout'}`}
      >
        {/* LOGO设置 */}
        <div className="ar-logo">
          <img alt="Eisoo-AR-Logo" src={ARLogo} />
        </div>

        {/* 导航栏菜单 */}
        <Menu theme="dark" mode="inline" selectedKeys={[selectedKeys]}>
          <Item key={`${match.path}/overview`}>
            <NavLink to={`${match.path}/overview`}>
              <IconFont type="icon-overview" />
              <span>总览</span>
            </NavLink>
          </Item>

          <Item key={`${match.path}/discover`}>
            <NavLink to={`${match.path}/discover`}>
              <IconFont type="icon-search" />
              <span>搜索</span>
            </NavLink>
          </Item>

          <Item key={`${match.path}/visualize`}>
            <NavLink to={`${match.path}/visualize`}>
              <IconFont type="icon-visualization" />
              <span>可视化</span>
            </NavLink>
          </Item>

          <SubMenu
            key="3"
            title={
              <span>
                <IconFont type="icon-data-source" />
                <span>数据源</span>
              </span>
            }
          >
            <Item key="31">数据输入</Item>
            <Item key="32">本地上传</Item>
            <Item key="33">远程采集</Item>
            <Item key="34">Agent管理</Item>
            <Item key="35">文件统计</Item>
            <Item key="36">日志库管理</Item>
          </SubMenu>

          <SubMenu
            key="4"
            title={
              <span>
                <IconFont type="icon-warning" />
                <span>告警</span>
              </span>
            }
          >
            <Item key="41">告警记录</Item>
            <Item key="42">告警策略</Item>
          </SubMenu>

          <Item key={`${match.path}/dashboard`}>
            <NavLink to={`${match.path}/dashboard`}>
              <IconFont type="icon-dashboard" />
              <span>仪表盘</span>
            </NavLink>
          </Item>

          <Item key="topology">
            <IconFont type="icon-topology" />
            <span>拓扑图</span>
          </Item>

          <SubMenu
            key="5"
            title={
              <span>
                <IconFont type="icon-machine-learning" />
                <span>机器学习</span>
              </span>
            }
          >
            <Item key={`${match.path}/machine-learning/abnormal-detection`}>
              <NavLink to={`${match.path}/machine-learning/abnormal-detection`}>异常检测</NavLink>
            </Item>
          </SubMenu>

          <SubMenu
            key="6"
            title={
              <span>
                <IconFont type="icon-setting" />
                <span>管理</span>
              </span>
            }
          >
            <Item key="61">日志分组</Item>
            <Item key="62">对象管理</Item>
            <Item key="63">高级设置</Item>
            <Item key={`${match.path}/management/authority`}>
              <NavLink to={`${match.path}/management/authority`}>权限管理</NavLink>
            </Item>
            <Item key="65">审计日志</Item>
            <Item key="66">系统配置</Item>
            <Item key="67">备份管理</Item>
            {/* <SubMenu key="66" title="系统配置">
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
            </SubMenu> */}
          </SubMenu>
        </Menu>

        {/* 折叠触发器 */}
        {/* <div className="collapse-trigger">
          <IconFont type="icon-collapse" />
        </div> */}
      </Sider>
    );
  }
}

export default SideBar;
