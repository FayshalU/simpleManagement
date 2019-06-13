
const INITIAL_STATE = {
    students: []
};

const StudentReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){

        case "STUDENT_FETCH_SUCCESSFULL": {

            return {...state, students: action.payload.students};
        }

        case "ADD_STUDENT_SUCCESSFULL":{
            return {...state, students: action.payload.students};
        }

        case "DELETE_STUDENT_SUCCESSFULL": {
            return {...state, students: action.payload.students};
        }
        
        case "EDIT_STUDENT_SUCCESSFULL": {
            
            return {...state, students: action.payload.students};
        }

        default: {
            return state;
        }
}
    }

    

export default StudentReducer;