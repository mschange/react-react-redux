import * as type from '../action/action-type';
const counterReducer = (state = { count: 1 }, action) => {
  console.log(action);
  switch(action.type) {
    case type.ADD_COUNT: 
      return {
        ...state, count: state.count + action.payload
      } 
    case type.DELE_COUNT:
      return {
        ...state, count: state.count - 1
      }
    default:
      return state
  }
}

export default counterReducer;