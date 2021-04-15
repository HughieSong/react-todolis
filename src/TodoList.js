import React, { Component, Fragment } from 'react';// ! Fragment 占位符 组件必须只有一个根标签，h5标签作为根标签会被渲染出来，用占位符做根标签不会被渲染
import TodoItem from './TodoItem';
// import Test from './Test';
import './style.css';

class TodoList extends Component {
  // ! constructor()：构造方法。在js里面一个class一定有一个constructor()构造函数,使用组件的时候constructor()最优先被执行,constructor接收一个参数props
  constructor(props) {
    // ! super()：继承。在class方法中，继承是使用 extends 关键字来实现的。子类 必须 在 constructor()调用 super()方法，否则新建实例时会报错。
    super(props);
    // ! this.state是组件的状态,负责存储组件的数据
    // ! 当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  // 在组件即将被挂载之前，自动被执行
  componentWillMount(){
    console.log('componentWillMount')
  }

  render() {
    console.log('render')
    return (
      <Fragment>
        <div>
          {/* 多行注释 */}
          {
            // 单行注释
          }
          {/* 1、表达式要通过花括号进行包裹
              2、原生的绑定事件onchange小写，react的绑定事件onChange大写
              3、事件绑定的时候要通过bind(this)对函数作用域进行变更
          */}
          {/* className代替class */}
          <label htmlFor="insertArea">输入内容</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            // onChange={this.handleInputChange.bind(this)}
            onChange={this.handleInputChange}
            ref={(input) => { this.input = input }}
          />

          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul)=>{this.ul=ul}}>
          {this.getTodoItem()}
        </ul>
        {/*<Test content={this.state.inputValue}/>*/}

      </Fragment>
    )
  }

  // 在组件被挂载之后，自动被执行
  componentDidMount() {
    console.log('componentDidMount')
  }

  // 组件被更新之前，会自动执行
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return false;
  }
  // 组件被更新之前，他会自动执行，但是他在shouldComponentUpdate之后执行
  // 如果shouldComponentUpdate返回true他才执行
  // 如果返回false，这个函数就不会执行了
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  // 组件更新完之后，他会被执行
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
          <TodoItem
            // 通过属性既可以传值又可以传方法
            key={item}
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
        //   <li
        //   key={index}
        //   // 传递参数放在this后面
        //   onClick={this.handleItemDelete.bind(this, index)}
        //   // dangerouslySetInnerHTML={{__html: item}}  dangerouslySetInnerHTML表示不转义在页面上显示的内容，使用时标签内text应为空
        //   dangerouslySetInnerHTML={{ __html: item }}
        // >
        // </li>
      )
    })
  }

  handleInputChange(e) {
    // console.log(e.target.value, this.input.value)
    // console.log(this)
    // ! 注意this的指向问题，bind(this)这里的bind将this的作用域指定到组件实例
    // this.setState({
    //   inputValue: e.target.value
    // })
    // TODO: 新版本写法
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }))
  }
  handleBtnClick() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })

    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }),()=>{
      console.log(this.ul.querySelectorAll('div').length)
    });

  }
  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何的改变
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list: list
    // })

    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1)
      return {
        list
      }
    })
  }
}


export default TodoList;