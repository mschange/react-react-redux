// 引入type，方便管理
import * as type from '../action/action-type';

// 异步的reducer
const postReducer = (state = {list: [{title: '李四', id: 10}]}, action) => {
  switch(action.type) {
    case type.POST_DATA: 
      return {
        ...state, list: action.payload
      }
    default:
      return state
  }
}

export default postReducer;