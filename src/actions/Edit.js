export const Edit = value => ({
    type: 'EDIT_STUDENT',
    payload: { id: value.id, name: value.name, email: value.email }
});

export const EditSuccess = (value) => ({
  type: "EDIT_STUDENT_SUCCESSFULL",
  payload: { students: value },
});