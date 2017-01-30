import React from "react";

export default class TodoItem extends React.Component {
  render() {

    const { todo } = this.props;

    return (
			<div class="well col-md-4 col-md-offset-4">
  			{todo.description}
			</div>
    );
  }
}
