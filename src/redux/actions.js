import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

const deleteContact = createAction("contacts/delete");
// const deleteContact = (id) => ({
//   type: types.DELETE,
//   payload: id,
// });

const changeFilter = createAction("contacts/changeFilter");
// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
