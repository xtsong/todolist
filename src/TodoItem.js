import React, { Component } from 'react';

//定义一个React组件
class TodoItem extends Component {

  //构造函数
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  //子组件和父组件通信，要调用父组件传递过来的方法
  handleDelete() {
    this.props.delete(this.props.index);
  }

  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleDelete}>{content}</div>
    );
  }
}

export default TodoItem;
