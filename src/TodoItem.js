import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);// ! bind(this)在这里节约性能
  }

  render() {
    const { content, test } = this.props;
    // JSX -> createElement -> 虚拟DOM（JS对象）-> 真实的DOM
    return <div onClick={this.handleClick}>{test}-{content}</div>
    // return React.createElement('div', {}, React.createElement('span', {}, 'item'))
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index)
  }
}

// 外部传来的参数进行类型校验
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,// ! isRequired表示必传
  // content: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
};
// 定义默认值
TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem;