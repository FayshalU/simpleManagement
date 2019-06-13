export const AddStudent = value => ({
    type: "ADD_STUDENT",
    payload: { name: value.name, email: value.email }
});

export const AddSuccess = (value) => ({
    type: "ADD_STUDENT_SUCCESSFULL",
    payload: { students: value },
  });
  