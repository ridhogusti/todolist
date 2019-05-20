import { put, takeLatest, call, all } from "redux-saga/effects";

import * as actionType from "./constants";
import * as exampleAction from "./action";
import API from "../../utils/request";

function* example() {
  try {
    const res = yield call(API.get, "/todos");
    yield put(exampleAction.exampleSuccess(res));
  } catch (error) {
    yield put(exampleAction.exampleError(error.message));
  }
}

function* saveTodo(data) {
  try {
    const res = yield call(API.post, "/todos", data.payload);
    yield put(exampleAction.saveTodoSuccess(res));
  } catch (error) {
    yield put(exampleAction.saveTodoError(error.message));
  }
}

function* completedTodo(data) {
  try {
    const res = yield call(API.put, "/todos", data.payload);
    yield put(exampleAction.completedTodoSuccess(res));
  } catch (error) {
    yield put(exampleAction.completedTodoError(error.message));
  }
}

export default function* watchExample() {
  yield all([
    takeLatest(actionType.EXAMPLE_REQUEST, example),
    takeLatest(actionType.SAVE_TODO_REQUEST, saveTodo),
    takeLatest(actionType.COMPLETED_TODO_REQUEST, completedTodo)
  ]);
}
