import { createStore, combineReducers } from "redux";

const requireModule = require.context(".", true, /\.(ts|js)$/)
let allReducers = {};
const excludedFiles = ["./index.js", "./types.ts"];
requireModule.keys().forEach(filename => {
  if (excludedFiles.includes(filename)) return;
  const [moduleName, imported] = filename.replace(/\.\/|\.(ts|js)/g, "").split("/");
  if (imported === "reducers") {
    allReducers[moduleName] = requireModule(filename).default;
  }
})

const rootReducers = combineReducers(allReducers);

export default createStore(rootReducers);
