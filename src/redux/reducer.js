import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const initialState = JSON.parse(window.localStorage.getItem("contacts")) ?? [];

const items = createReducer(initialState, {
  [actions.addContact]: (state, { payload }) => {
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
  },
  [actions.deleteContact]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer("", {
  [actions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
