import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import * as serviceWorker from './serviceWorker';

import { GetAllStudents } from './actions/GetAllStudents';

import configureStore from './store';

const store = configureStore();
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

store.dispatch(GetAllStudents());
  
serviceWorker.unregister();
