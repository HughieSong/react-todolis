import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux';
class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
          <button onClick={this.props.handleBtnClick}>提交</button>
        </div>
        <ul>
          <li>test</li>
        </ul>
      </div>
    )
  }

  handleBtnClick() { }
}

// store里面的公用数据state映射到组件里的props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}
// store.dispatch方法挂载到props上
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);
      console.log(e.target.value)
    }
  }
}

// TodoList和store作连接
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);