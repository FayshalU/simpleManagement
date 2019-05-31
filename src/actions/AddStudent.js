export const AddStudent = value => ({
    type: "ADD_STUDENT",
    payload: { name: value.name, email: value.email }
});