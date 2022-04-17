import { createStore, applyMiddleware, compose } from "redux";

// middlewares
import thunkMiddleware from "redux-thunk";

// Import custom components
import rootReducer from "../reducers";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem("state", serializedState);
  } catch (e) {}
}

function loadFromLocalStorage() {
  try {
    const serializedState = window.localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

/**
 * Create a Redux store that holds the app state.
 */
const store = createStore(
  rootReducer,
  persistedState,
  compose(
    applyMiddleware(thunkMiddleware),

    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : function (f) {
          return f;
        }
  )
);

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage(state);
});
console.warn(unsubscribe);
export default store;
