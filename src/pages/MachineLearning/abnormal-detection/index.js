import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import Breadcrumbs from 'Components/Breadcrumbs';
import Overview from './Overview';
import ButtonGroups from './ButonGroups';
import TableInfo from './TableInfo';
import NewAbnormalDetection from './New';
import '../style.less';

const { Content } = Layout;

const AbnormalDetection = ({ match }) => (
  <Content className="content-wrapper">
    <Breadcrumbs pathname={match.path} />

    <div className="container-layout">
      <Switch>
        <Route
          exact
          path={match.path}
          render={() => (
            <div>
              <Overview />
              <ButtonGroups match={match} />
              <TableInfo />
            </div>
          )}
        />
        <Route path={`${match.path}/new`} component={NewAbnormalDetection} />
      </Switch>
    </div>
  </Content>
);

AbnormalDetection.propTypes = {
  match: PropTypes.object
};

export default AbnormalDetection;
