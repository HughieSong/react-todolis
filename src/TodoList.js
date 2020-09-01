import React, { Component,Fragment } from 'react';
// Fragment 占位符 组件必须只有一个根标签，h5标签作为根标签会被渲染出来，用占位符做根标签不会被渲染

// function TodoList(){
//   return (
//     <div>dsdsd</div>
//   )
// }


class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input type="text" /><button>提交</button>
        </div>
        <ul>
          <li>学英语</li>
          <li>Learning React</li>
        </ul>
      </Fragment>
    )
  }
}


export default TodoList;