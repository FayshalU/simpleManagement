import { call, put, takeEvery } from 'redux-saga/effects';

import { AddStudentsToState } from '../actions/GetAllStudents';
import { AddSuccess } from '../actions/AddStudent';
import { DeleteSuccess } from '../actions/DeleteStudent';
import { EditSuccess } from '../actions/Edit';

const fetchRequest = (url, method, body) => {
    // console.log(body);
    return fetch(url, {
        method: method,
        mode: 'cors', 
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
    })
    .then( response => response.json())
    .then( json => json );

    // return new Promise((resolve)=>{
    //     fetch(url, { method: method, body: body })
    //         .then( response => resolve(response));
    // })
}

const postRequest = (url, data) => {
    // console.log(data);
    return fetch(url, {
        method: 'POST',
        mode: 'cors', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then( response => response.json())
    .then( json => json );
}

function* fetchStudents(action) { 
    try {
       const students = yield call(fetchRequest, 'http://localhost:4000/students', 'get');
       console.log(students);
       yield put(AddStudentsToState(students));
    } catch (e) {
       yield put({type: "STUDENT_FETCH_FAILED", message: e.message});
    }
}

function* addNewStudent(action) {
    // var formData = new FormData();
    // formData.append('name', action.payload.name);
    // formData.append('email', action.payload.email); 

    try {
       const students = yield call(postRequest, 'http://localhost:4000/students', action.payload);
       console.log(students);
       yield put(AddSuccess(students));
    } catch (e) {
       yield put({type: "STUDENT_ADD_FAILED", message: e.message});
    }
}

function* deleteStudent(action) { 
    try {
       const students = yield call(fetchRequest, 'http://localhost:4000/students/'+action.payload.id, 'post');
       console.log(students);
       yield put(DeleteSuccess(students));
    } catch (e) {
       yield put({type: "STUDENT_DELETE_FAILED", message: e.message});
    }
}

function* editStudent(action) { 
    try {
       const students = yield call(postRequest, 'http://localhost:4000/students/edit/', action.payload);
       console.log(students);
       yield put(EditSuccess(students));
    } catch (e) {
       yield put({type: "STUDENT_EDIT_FAILED", message: e.message});
    }
}


function* studentSaga(){
    yield takeEvery('GET_ALL', fetchStudents);
    yield takeEvery('ADD_STUDENT', addNewStudent);
    yield takeEvery('DELETE_STUDENT', deleteStudent);
    yield takeEvery('EDIT_STUDENT', editStudent);
}

export default studentSaga;