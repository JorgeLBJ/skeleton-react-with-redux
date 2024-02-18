import { combineReducers } from 'redux';
import { createRouterReducer } from '@lagunovsky/redux-react-router';
import AuthReducer from './AuthReducer';

const rootReducer = (history: any) =>
  combineReducers({
    auth: AuthReducer,
    router: createRouterReducer(history),
  });

export default rootReducer;
