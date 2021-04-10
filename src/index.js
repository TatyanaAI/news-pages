import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import './index.css';

import App from './containers/App';
import newsReducer from "./store/reducers/newsReducer";
import addNewsReducer from "./store/reducers/addNewsReducer";
import fullNewsReducer from "./store/reducers/fullNewsReducer";
import commentsReducer from "./store/reducers/commentsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  news: newsReducer,
  addNews: addNewsReducer,
  fullNews: fullNewsReducer,
  comments: commentsReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
