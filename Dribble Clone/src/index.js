import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import authReducer from './store/reducers/auth';
import shotReducer from './store/reducers/shots';
import userReducer from './store/reducers/users';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  shotsState: shotReducer,
  authState: authReducer,
  userState:userReducer
})

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true, traceLimit: 25 }) : null || compose;

const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(thunk))
  )

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
