import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
} from "./userRedux";
import {
  itemFailure,
  itemStart,
  itemSuccess,
  itemUpdateStart,
  itemUpdateSuccess,
  itemUpdateFailure,
} from "./itemRedux";
import { publicRequest } from "../requestMethods";

//LOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

//REGISTER
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

//ADD TODO ITEM
export const todoList = async (dispatch, item) => {
  dispatch(itemStart());
  try {
    const res = await publicRequest.post("/item/list", item);
    dispatch(itemSuccess(res.data));
  } catch (err) {
    dispatch(itemFailure());
  }
};

//DELETE TODO ITEM
export const deleteTodoList = async (dispatch, id) => {
  dispatch(deleteItemStart());
  try {
    const res = await publicRequest.delete("/item/delete", id);
    dispatch(deleteItemSuccess(id));
  } catch (err) {
    dispatch(deleteItemFailure());
  }
};