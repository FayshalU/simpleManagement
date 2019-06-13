import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import studentSaga from '../sagas';
import StudentReducer from '../reducers/StudentReducer';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        StudentReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    sagaMiddleware.run(studentSaga);
    return store;
}

export default configureStore;