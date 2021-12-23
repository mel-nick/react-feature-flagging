import {
  GET_GLOBAL_PERMISSIONS,
  GET_GLOBAL_PERMISSIONS_SUCCESS,
  GET_GLOBAL_PERMISSIONS_ERROR,
  GET_USER_PERMISSIONS,
  GET_USER_PERMISSIONS_SUCCESS,
  GET_USER_PERMISSIONS_ERROR,
} from './types';
import axios from 'axios';

export const getGlobalPermissions = () => async (dispatch) => {
  dispatch({ type: GET_GLOBAL_PERMISSIONS });
  try {
    const res = await axios.get(`/api/permissions`);
    dispatch({
      type: GET_GLOBAL_PERMISSIONS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_GLOBAL_PERMISSIONS_ERROR,
      payload: {
        msg: err?.response?.data,
        status: err?.response?.status,
      },
    });
  }
};

export const getUserPermissions = () => async (dispatch) => {
  dispatch({ type: GET_USER_PERMISSIONS });
  try {
    const res = await axios.get(`/api/users/me`);
    dispatch({
      type: GET_USER_PERMISSIONS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_USER_PERMISSIONS_ERROR,
      payload: {
        msg: err?.response?.data,
        status: err?.response?.status,
      },
    });
  }
};
