import * as actionType from "./constants";

export const exampleRequest = data => ({
  type: actionType.EXAMPLE_REQUEST,
  payload: data
});

export const exampleSuccess = data => ({
  type: actionType.EXAMPLE_SUCCESS,
  payload: data
});

export const exampleError = error => ({
  type: actionType.EXAMPLE_ERROR,
  payload: error
});

export const saveTodoRequest = data => {
  return {
    type: actionType.SAVE_TODO_REQUEST,
    payload: data
  };
};
export const saveTodoSuccess = data => {
  return {
    type: actionType.SAVE_TODO_SUCCESS,
    payload: data
  };
};
export const saveTodoError = error => {
  return {
    type: actionType.SAVE_TODO_ERROR,
    payload: error
  };
};

export const completedTodoRequest = data => {
  return {
    type: actionType.COMPLETED_TODO_REQUEST,
    payload: data
  };
};
export const completedTodoSuccess = data => {
  return {
    type: actionType.COMPLETED_TODO_SUCCESS,
    payload: data
  };
};
export const completedTodoError = error => {
  return {
    type: actionType.COMPLETED_TODO_ERROR,
    payload: error
  };
};
