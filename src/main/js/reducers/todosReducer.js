export default function reducer(state={
    todos: [],
    fetching: false,
    fetched: false,
    error: null
  }, action) {

    switch (action.type) {
      case "FETCH_TODOS": {
        return {...state, fetching: true}
      }
      case "FETCH_TODOS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_TODOS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          error: null,
          todos: action.payload
        }
      }
      case "ADD_TODO": {
        return {...state, fetching: true}
      }
      case "ADD_TODO_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "ADD_TODO_FULFILLED": {
        console.log(this);
        return {
          ...state,
          fetching: false,
          fetched: true,
          error: null,
          todos: [...state['todos'], action.payload ]
        }
      }
    }

    return state
}
