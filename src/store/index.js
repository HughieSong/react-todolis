import { createStore } from 'redux';
import reducer from './reducer';
// store必须是唯一的
// 只有store能够改变自己的内容
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;