// 引入reducer的连接进行合并多个reducer
import { combineReducers } from 'redux';

import counter from './counter';
import api from './api';


// combineReducers需要的是一个对象
const rootReducer = combineReducers({
  counter,
  api
})

export default rootReducer;