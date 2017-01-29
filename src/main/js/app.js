'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {todoList: [ {id: 1, description: "My first task", done: false } ]};
    }

    render() {
        return (
            <TodoList todoList={this.state.todoList}/>
        )
    }
}

class TodoList extends React.Component{
    render() {
        var todos = this.props.todoList.map(todo =>
            <Todo key={todo.id} todo={todo}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>Description</th>
                    <th>Completed</th>
                </tr>
                {todos}
                </tbody>
            </table>
        )
    }
}

class Todo extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.todo.description}</td>
                <td>{this.props.todo.done.toString()}</td>
            </tr>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)