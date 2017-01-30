import axios from "axios";

export function fetchTodos() {
  return function(dispatch) {
        dispatch({type: "FETCH_TODOS"});
        axios.get("/rest/todos/")
          .then((response) => {
            console.log(response);
            dispatch({type: "FETCH_TODOS_FULFILLED", payload: response.data._embedded.todos})
          })
          .catch((err) => {
            dispatch({type: "FETCH_TODOS_REJECTED", payload: err})
          })
      }
}

export function addTodo(todoDescription) {
    return function(dispatch) {
        dispatch({type: "ADD_TODO"});
        axios.post("/rest/todos/", {
            "description": todoDescription
        })
        .then((response) => {
            console.log(response);
            dispatch({type: "ADD_TODO_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "ADD_TODO_REJECTED", payload: err})
        })
    }
}