import axios from "axios";
import { API } from "../helpers/const";
import {
  getUsersAction,
  getUserAction,
  getUserToEditAction,
  clearUserToEditAction,
} from "../store/userReducer";

const toastSettings = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const createUser = (newUser, toast) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API}/contact/`, newUser);
      dispatch(getUsers());
      toast.success("User created successfully", toastSettings);
    } catch (e) {
      toast.error("Ошибка. Попробуйте заново!", toastSettings);
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios(`${API}/contact/`);
      dispatch(getUsersAction(response.data));
    } catch (e) {
      console.log(e.response);
    }
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios(`${API}/contact/${id}`);
      dispatch(getUserAction(response.data));
    } catch (e) {
      console.log(e.response);
    }
  };
};

export const getUserToEdit = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios(`${API}/contact/${id}`);
      dispatch(getUserToEditAction(response.data));
    } catch (e) {
      console.log(e.response);
    }
  };
};

export const saveEditedUser = (editedUser, toast) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `${API}/contact/${editedUser.id}`,
        editedUser
      );
      dispatch(getUsers());
      toast.success("Сhanges saved successfully", toastSettings);
    } catch (e) {
      toast.error("Ошибка. Попробуйте заново!", toastSettings);
    }
  };
};

export const deleteUser = (id, toast) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${API}/contact/${id}`);
      dispatch(getUsers());
      toast.success("User deleted successfully", toastSettings);
    } catch (e) {
      toast.error("Ошибка. Попробуйте заново!", toastSettings);
    }
  };
};

export const clearUserToEdit = () => {
  return async (dispatch) => {
    try {
      dispatch(clearUserToEditAction(null));
    } catch (e) {
      console.log(e);
    }
  };
};
