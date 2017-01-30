import React from "react"
import { connect } from "react-redux"

import { fetchTodos, addTodo } from "../actions/todoActions"

import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"

@connect((store) => {
  return {
    todos: store.todos,
  };
})
export default class Layout extends React.Component {

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.props.dispatch(fetchTodos())
  }

  addTodo(todoDescription) {
    this.props.dispatch(addTodo(todoDescription))
  }

  render() {
    const { todos } = this.props;

    return <div class="text-center">
      <AddTodoForm addTodo={this.addTodo.bind(this)} />
      <TodoList {...todos} />
    </div>
  }
}
