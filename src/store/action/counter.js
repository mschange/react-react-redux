// 引入封装的ajax请求
import { groundStore } from '../../api/index';

// action
export const add = (n) => {
  return {
    type: 'ADD_COUNT',
    payload: n
  }
}

// action
export const dele = () => {
  return {
    type: 'DELE_COUNT'
  }
}

// 异步action
export const postHome = () => {
  console.log('进来了');
  return dispatch=>{
    groundStore().then(data => {
      console.log(data, 'data');
      dispatch({
        type: 'POST_DATA',
        payload: data.data
      })
    });
  }
}