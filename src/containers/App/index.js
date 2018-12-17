import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import AuthorizedRoute from '../../components/Auth';
import Login from '../../pages/Login';
import Home from '../../pages/Home';
import store from '../../store';

// 将应用中的所有 state 注入 APP
const App = () => (
  <LocaleProvider locale={zh_CN}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <AuthorizedRoute path="/home" component={Home} />
          <Redirect to="login" />
        </Switch>
      </Router>
    </Provider>
  </LocaleProvider>
);

export default App;
