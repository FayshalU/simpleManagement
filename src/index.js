import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import * as serviceWorker from './serviceWorker';

import configureStore from './store';

const store = configureStore();
window.store = store;

function handleDispatch(action, data){
    store.dispatch(action(data));
}

ReactDOM.render(
    <Provider store={store}>
        <App handleDispatch={handleDispatch} />
    </Provider>,
    document.getElementById('root')
);
  
serviceWorker.unregister();
