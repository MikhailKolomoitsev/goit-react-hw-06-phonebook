import types from "./types";
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction(types.ADD, ({ name, number }) => ({
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

const deleteContact = createAction(types.DELETE);
// const deleteContact = (id) => ({
//   type: types.DELETE,
//   payload: id,
// });

const changeFilter = createAction(types.CHANGE_FILTER);
// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
