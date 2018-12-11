import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Header from 'Components/Header';
import SideBar from './components/SideBar';
import Discover from '../Discover';
import Visualize from '../Visualize';
import DashBoard from '../Dashboard';
import Disk from '../Management/components/storage/Disk';
import './style.less';

const Home = ({ match, history }) => (
  <Layout className="home-layout">
    <SideBar match={match} history={history} />
    <Layout>
      <Header history={history} />
      <Switch>
        <Route path={`${match.path}`} exact component={Discover} />
        <Route path={`${match.path}/discover`} component={Discover} />
        <Route path={`${match.path}/visualize`} component={Visualize} />
        <Route path={`${match.path}/dashboard`} component={DashBoard} />
        <Route path={`${match.path}/management/storage/disk`} component={Disk} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </Layout>
  </Layout>
);

Home.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
};

export default Home;
