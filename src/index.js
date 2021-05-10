import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store'

const App = (
  // provider连接了store，那么provider里面的所有组件都可以使用store的内容
  <Provider store={store}>
    <TodoList />
  </Provider>
);

ReactDOM.render(
  App,
  document.getElementById('root')
);
