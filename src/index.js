import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers';
import {reducer as formReducer} from 'redux-form';
import { Provider } from 'react-redux';
import {combineReducers, createStore} from 'redux';


const store = createStore(combineReducers({
  contador: reducer,
  form: formReducer
}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
