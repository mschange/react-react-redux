// 引入createStore进行创建store
import { createStore, compose, applyMiddleware } from 'redux';
// 引入redux的中间件thunk
import thunk from 'redux-thunk';
// 引入reducer
import rootReducer from './reducer';

// 创建store
const store = createStore(
  // 把reducer挂载到store
  rootReducer,
  // 使用compose连接中间件以及调试工具
  compose(
    applyMiddleware(...[thunk]),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;