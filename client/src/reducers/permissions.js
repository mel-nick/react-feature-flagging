/* eslint-disable import/no-anonymous-default-export */
import {
  GET_GLOBAL_PERMISSIONS_SUCCESS,
  GET_GLOBAL_PERMISSIONS_ERROR,
  GET_USER_PERMISSIONS_SUCCESS,
  GET_USER_PERMISSIONS_ERROR,
} from '../actions/types';

const initialState = {
  globalPermissions: {},
  userPermissions: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_GLOBAL_PERMISSIONS_SUCCESS:
      return {
        ...state,
        globalPermissions: payload,
      };
    case GET_USER_PERMISSIONS_SUCCESS:
      return {
        ...state,
        userPermissions: payload,
      };
    case GET_GLOBAL_PERMISSIONS_ERROR:
    case GET_USER_PERMISSIONS_ERROR:
      return {
        state,
      };
    default:
      return state;
  }
}
