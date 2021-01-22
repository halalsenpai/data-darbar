import {
  CLEAR_DATA,
  CREATE_DATA,
  DELELTE_SELECTED_DATA,
  DELETE_DATA,
  GET_DATA,
  SELECT_DATA,
  UPDATE_DATA,
} from "../constant/types";

// add a data/info/contact
export const addInfo = (data) => {
  return {
    type: CREATE_DATA,
    payload: data,
  };
};

//get a data/info/contact
export const getInfo = (id) => {
  return {
    type: GET_DATA,
    payload: id,
  };
};

//update a data/info/contact
export const updateInfo = (data) => ({
  type: UPDATE_DATA,
  payload: data,
});

//delete a data/info/contact

export const deleteInfo = (id) => ({
  type: DELETE_DATA,
  payload: id,
});

// select All data

export const selectAllInfo = (id) => ({
  type: SELECT_DATA,
  payload: id,
});

// Clear Selected Data
export const clearAllInfo = () => ({
  type: CLEAR_DATA,
});

// Delete Selected Data

export const deleteAllInfo = () => ({
  type: DELELTE_SELECTED_DATA,
});
