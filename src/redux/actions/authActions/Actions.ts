import { SIGN_IN, SIGN_OUT, UPDATE_AUTH_INFO } from './ActionTypes';

export function signIn(payload: any) {
  return {
    type: SIGN_IN,
    payload,
  };
}

export function updateAuthInfo(payload: any) {
  return {
    type: UPDATE_AUTH_INFO,
    payload,
  };
}

export function signOut(payload: any) {
  return {
    type: SIGN_OUT,
    payload,
  };
}

const AuthAction = {
  signIn,
  signOut,
  updateAuthInfo,
};

export default AuthAction;
