import React from "react";
import Spinner from 'react-webpack-spinner'

import TodoItem from "./TodoItem"

export default class TodoList extends React.Component {
  render() {

  	const { fetching, todos, error } = this.props;
   	
		if (fetching) {
			return <Spinner width={32} height={32} color={'black'} />;
		}

		if (error) {
			return <div class="alert alert-danger col-md-4 col-md-offset-4">
  				<strong>Oh snap!</strong> Noe har feilet, prøv igjen...
				</div>;
		}

		const TodoList = todos.map((todo) => {
      	return <TodoItem key={todo._links.self.href} todo={todo} />;
    });

    return (
    	<div>
    		{TodoList}
    	</div>
    );
  }
}