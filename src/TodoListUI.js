import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

// 当一个普通的组件（类）只有一个render函数的时候，可以用无状态组件（函数）替换普通组件
// 无状态组件性能比较高
const TodoListUI = (props) => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <Input
        value={props.inputValue}
        placeholder="todo info"
        style={{ width: '300px', marginRight: '10px' }}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      <List
        style={{ marginTop: '10px', width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => <List.Item onClick={(idnex) => { props.handleItemDelete(index) }}>{item}</List.Item>}
      />
    </div>
    )
}

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//         <Input
//           value={this.props.inputValue}
//           placeholder="todo info"
//           style={{ width: '300px', marginRight: '10px' }}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         <List
//           style={{ marginTop: '10px', width: '300px' }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => <List.Item onClick={(idnex) => { this.props.handleItemDelete(index) }}>{item}</List.Item>}
//         />
//       </div>)
//   }
// }

export default TodoListUI;