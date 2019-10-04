import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";

const requireModule = require.context(".", true, /reducers\.(ts|js)$/);
let allReducers = {};
requireModule.keys().forEach(filename => {
  const moduleName = filename.replace(/\.\/|\.(ts|js)/g, "").split("/")[0];
  allReducers[moduleName] = requireModule(filename).default;
});

const rootReducers = combineReducers(allReducers);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  {},
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
