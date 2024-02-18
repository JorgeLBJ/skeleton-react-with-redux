import { User } from '../../models/User';
import { Action } from '../models/Action';
import {
  SIGN_IN,
  SIGN_OUT,
  UPDATE_AUTH_INFO,
} from '../actions/authActions/ActionTypes';

const defaultStore: User = {
  id: 0,
  username: '',
  name: '',
  lastname: '',
  email: '',
  avatar: null,
  permissions: [],
  token: null,
};

export default function AuthReducer(
  state: User = defaultStore,
  action: Action
) {
  switch (action.type) {
    case SIGN_IN:
      return {
        id: action.payload.id,
        username: action.payload.username,
        name: action.payload.name,
        lastname: action.payload.lastname,
        email: action.payload.email,
        avatar: action.payload.avatar,
        permissions: action.payload.permissions,
        token: action.payload.token,
      };
    case UPDATE_AUTH_INFO:
      return {
        ...state,
        ...action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        ...defaultStore,
      };
    default:
      return state;
  }
}
