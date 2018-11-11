import React from 'react';
import { Provider } from 'react-redux';
import Home from '../../pages/Home';
import store from '../../store';

// 将应用 中的所有 state 注入 APP
const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
