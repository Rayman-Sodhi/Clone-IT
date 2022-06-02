import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from "./App";
import { fetchPokemons } from "./actions";

const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));

store.dispatch(fetchPokemons());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
