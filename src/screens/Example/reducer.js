import * as actionType from "./constants";

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: null,
  todos: []
};

const exampleRequest = state => ({
  ...state,
  isLoading: true
});

const exampleSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  todos: payload
});

const exampleError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload
});

export const saveTodoRequest = (state, payload) => {
  return {
    ...state,
    isLoading: true
  };
};
export const saveTodoSuccess = (state, payload) => {
  return {
    ...state,
    isLoading: false,
    todos: [payload, ...state.todos]
  };
};
export const saveTodoError = (state, payload) => {
  return {
    ...state,
    isLoading: false,
    error: true,
    errorMessage: payload.error
  };
};

export const completedTodoRequest = (state, payload) => {
  return {
    ...state,
    isLoading: true
  };
};
export const completedTodoSuccess = (state, payload) => {
  return {
    ...state,
    isLoading: false,
    todos: [
      ...state.todos.map(item => {
        if (item.id === payload.id) {
          item.completed = payload.completed;
        }
        return item;
      })
    ]
  };
};
export const completedTodoError = (state, payload) => {
  return {
    ...state,
    isLoading: false,
    error: true,
    errorMessage: payload.error
  };
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.EXAMPLE_REQUEST:
      return exampleRequest(state, action.payload);
    case actionType.EXAMPLE_SUCCESS:
      return exampleSuccess(state, action.payload);
    case actionType.EXAMPLE_ERROR:
      return exampleError(state, action.payload);

    case actionType.SAVE_TODO_REQUEST:
      return saveTodoRequest(state, action.payload);
    case actionType.SAVE_TODO_SUCCESS:
      return saveTodoSuccess(state, action.payload);
    case actionType.SAVE_TODO_ERROR:
      return saveTodoError(state, action.payload);

    case actionType.COMPLETED_TODO_REQUEST:
      return completedTodoRequest(state, action.payload);
    case actionType.COMPLETED_TODO_SUCCESS:
      return completedTodoSuccess(state, action.payload);
    case actionType.COMPLETED_TODO_ERROR:
      return completedTodoError(state, action.payload);

    default:
      return state;
  }
};

export default exampleReducer;
