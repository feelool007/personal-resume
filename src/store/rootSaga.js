import { fork } from "redux-saga/effects";

const requireModules = require.context(".", true, /sagas\.(js|ts)$/);
let allSagaListeners = [];

requireModules.keys().forEach(filename => {
  const imported = requireModules(filename);
  allSagaListeners.push(...Object.values(imported));
})

export default function*() {
  for (let i = 0; i < allSagaListeners.length; i++) {
    yield fork(allSagaListeners[i]);
  }
}
