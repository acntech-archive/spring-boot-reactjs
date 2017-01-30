import React from "react";

export default class AddTodoForm extends React.Component {

  constructor() {
    super();
    this.state = {"todoDescription": ""}
  }

  inputChanged(e) {
    this.setState({"todoDescription" : e.target.value})
  }

  keyPressed(e) {
    if(e.keyCode == 13) { // If enter is pressed
      this.addTodo();
    }
  }

  addTodo() {
    this.props.addTodo(this.state.todoDescription);
  }

  render() {
    const inputRowStyle = {
      'marginBottom': '20px'
    }

    return (
        <div class="input-group col-md-4 col-md-offset-4" style={inputRowStyle}>
          <input type="text" class="form-control"
                 placeholder="Remember to shave and shower..."
                 value={this.state.todoDescription}
                 onChange={this.inputChanged.bind(this)}
                 onKeyDown={this.keyPressed.bind(this)} />
          <span class="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.addTodo.bind(this)}>Add</button>
          </span>
      </div>
    );
  }
}