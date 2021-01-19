import { CREATE_DATA, GET_DATA } from "../constant/types";

// actions
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
