import React, { Component } from 'react';
// 引入connect连接react跟react-redux
import { connect } from 'react-redux';
// 引入action里面的dispatch方法
import { add, dele, postHome } from './store/action/counter'
class App extends Component {

  constructor(props) {
    super(props);
    console.log(this.props, 'this.props');
  }

  componentWillMount() {
    // 如果是初始化页面的请求, 为了点击请求数据效果更加明显，所以进行了注释
    // this.props.getIem();
  }

  render() {
    // 从this.props中取出数据以及方法
    const { count, list, addCount, deleCount, getIem } = this.props;
    console.log(count);
    return (
      <div className="App">
        <p>redux</p>
        <p>count: {count}</p>
        <p>
          <button onClick={() => addCount(1)}>+1</button>
          <button onClick={deleCount}>-1</button>
          <button onClick={() => addCount(10)}>+10</button>
          <button onClick={ getIem }>请求数据</button>
        </p>
        <ul>
          {list.map(item => {
            return <li key={item.id}>{item.title}</li>
          })}
        </ul>
      </div>
    );
  }
}

// 映射数据
const mapStateToProps = (state) => {
  console.log(state, 'state');
  return {
    count: state.counter.count,
    list: state.api.list
  }
}

// 映射dispatch方法
const mapDispatchToProps = (dispatch) => {
  return {
    deleCount: () => dispatch(dele()),
    addCount: (n) => dispatch(add(n)),
    getIem: () => dispatch(postHome())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
