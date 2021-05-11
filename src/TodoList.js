import React, { Component } from 'react';
import { connect } from 'react-redux';

// 抽离为无状态组件
const TodoList = (props) => {
  const { inputValue, list, changeInputValue, handleClick, handleDelete } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return <li onClick={handleDelete.bind(this, index)} key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}
/* class TodoList extends Component {
  render() {
    const { inputValue, list, changeInputValue, handleClick, handleDelete } = this.props;
    return (
      <div>
        <div>
          <input value={inputValue} onChange={changeInputValue} />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {list.map((item, index) => {
            return <li onClick={handleDelete.bind(this, index)} key={index}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
} */

// store里面的公用数据state映射到组件里的props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
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
    },
    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action);
    },
    handleDelete(index) {
      console.log(index)
      const action = {
        type: 'delete_item',
        index
      }
      dispatch(action);
    }
  }
}

// TodoList和store作连接   connect返回容器组件（mapStateToProps和mapDispatchToProps是业务逻辑，TodoList是UI组件）
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);