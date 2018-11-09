import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from 'Components/Header';
import Discover from '../Discover';
import DashBoard from '../Dashboard';
import Visualize from '../Visualize';
import SideBar from './components/SideBar';

const Home = () => (
  <Router>
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout>
        <Header />
        <Route exact path="/" component={Discover} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/visualize" component={Visualize} />
        <Route exact path="/dashboard" component={DashBoard} />
      </Layout>
    </Layout>
  </Router>
);

export default Home;
