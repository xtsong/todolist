import React, { Component } from 'react';
import TodoItem from './TodoItem';

//定义一个React组件
class TodoList extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    };
    this.handleKeyup = this.handleKeyup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBtnClick() {
    if(this.state.inputValue) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    } else {
      alert("请正确输入...");
    }
  }

  handleKeyup(e) {
    if(e.keyCode == 13) {
      this.handleBtnClick();
    }
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接受父组件传递过来的参数

  handleDelete(index) {
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({list})
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            delete={this.handleDelete}
            key={index} 
            index={index} 
            content={item}
          />
        );
      })
    )
  }

  render() {
    return (
      <div>
        <div>
          <h2>ToDoList</h2>
          <input className="todo-input" placeholder="添加ToDo" value={this.state.inputValue} onKeyUp={this.handleKeyup} onChange={this.handleInputChange} />
          <button className="todo-btn" onClick={this.handleBtnClick}>新增</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </div>
    );
  }
}

export default TodoList;
