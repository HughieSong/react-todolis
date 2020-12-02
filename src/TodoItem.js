import React, { Component } from 'react';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);//bind(this)在这里节约性能
  }

  render() {
    const { content } = this.props;
    return <div onClick={this.handleClick}>{content}</div>
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index)
  }
}

export default TodoItem;