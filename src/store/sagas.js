import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreator';
import axios from 'axios';

function* getInitList() {
  try {
    // generator 函数里不适合再用promise函数，这里yield有等待的作用
    const res = yield axios.get('/todolist.json');
    const action = initListAction(res.data);
    yield put(action)
  } catch (e) {
    console.log(e)
  }
}

// generator 函数
function* mySaga() {
  // 接收到action类型是GET_INIT_LIST的时候，就执行getInitList方法
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;