import { combineReducers } from "redux";
import types from "./types";
const initialState = JSON.parse(window.localStorage.getItem("contacts")) ?? [];
const items = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD:
      const dataLowerCase = payload.name.toLowerCase();
      const itemToFind = state.find(
        (contact) => contact.name.toLowerCase() === dataLowerCase
      );
      if (itemToFind) {
        alert(`${itemToFind.name} is already in contacts`);
        return state;
      } else {
        return [...state, payload];
      }

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
