import types from "./types";
import { v4 as uuidv4 } from "uuid";

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact };
