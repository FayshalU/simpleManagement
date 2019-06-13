export const DeleteStudent = Id => ({
    type: "DELETE_STUDENT",
    payload: { id: Id },
});

export const DeleteSuccess = (value) => ({
  type: "DELETE_STUDENT_SUCCESSFULL",
  payload: { students: value },
});
