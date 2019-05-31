import uuid from 'uuid/v1';


const INITIAL_STATE = {
    students: [
        {
            id: "1",
            name: "Student One",
            email: "one@mail.com"
        },
        {
            id: "2",
            name: "Student Two",
            email: "two@mail.com"
        },
        {
            id: "3",
            name: "Student Three",
            email: "three@mail.com"
        }
    ]
};

const StudentReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){

        case "ADD_STUDENT":{
            const id = uuid();
            const student = {
                id,
                name: action.payload.name,
                email: action.payload.email
            };
            return {...state, students: [...state.students, student]};
        }

        case "DELETE_STUDENT": {
            const student = state.students.filter(({ id }) => id !== action.payload.id);
            return { ...state, students:student };
        }
        
        case "EDIT_STUDENT": {
            
            const students = state.students.map(item => {
              if (item.id === action.payload.id) {
                item.name = action.payload.name;
                item.email = action.payload.email;
              }
      
              return item;
            });
      
            return { ...state, students };
          }

        default: {
            return state;
        }
}
    }

    

export default StudentReducer;