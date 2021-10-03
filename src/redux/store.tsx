/**
 * Redux-tookkit
 * import { configureStore } from "@reduxjs/toolkit";
    const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
    middleware: [sagaMiddleware],
  });
 */

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/rootSaga.js";
import rootReducer from "./reducers/rootReducer";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
