import { takeEvery } from "redux-saga/effects";
import * as types from "../actionTypes";
// Worker Sagas
function* loadTasks() {}

// Watcher Sagas
function* watchLoadTasks() {
  yield takeEvery(types.LOAD_TASKS, loadTasks);
}
