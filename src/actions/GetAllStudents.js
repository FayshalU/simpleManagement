export const GetAllStudents = () => ({
    type: "GET_ALL"
});

export const AddStudentsToState = (value) => ({
    type: "STUDENT_FETCH_SUCCESSFULL",
    payload: {students: value}
});