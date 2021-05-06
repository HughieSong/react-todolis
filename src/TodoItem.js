import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);// ! bind(this)在这里节约性能
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, nextState, this.props.content)
    if(nextProps.content !== this.props.content) {
      return true;
    }else{
      return false;
    }
  }

  render() {
    console.log('child render')
    // const { content, test } = this.props;
    const { content } = this.props;
    // JSX -> createElement -> 虚拟DOM（JS对象）-> 真实的DOM
    // return <div onClick={this.handleClick}>{test}-{content}</div>
    return <div onClick={this.handleClick}>{content}</div>
    // return React.createElement('div', {}, React.createElement('span', {}, 'item'))
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index)
  }

  // 一个组件要从父组件接收参数
  // 如果这个组件第一次存在于父组件中，不会执行
  // 如果这个组件之前已经存在于父组件中，才会执行
  componentWillReceiveProps() {
    // console.log('child componentWillReceiveProps')
  }

  componentWillUnmount() {
    // console.log('child componentWillUnmount')
  }
}

// 外部传来的参数进行类型校验
TodoItem.propTypes = {
  // test: PropTypes.string.isRequired,// ! isRequired表示必传
  // content: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
};
// 定义默认值
// TodoItem.defaultProps = {
//   test: 'hello world'
// }

export default TodoItem;