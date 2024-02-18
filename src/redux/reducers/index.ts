import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import logger from 'redux-logger';
import rootReducer from './Reducers';
import { REACT_APP_NAME } from '../../config/Config';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export const history = createBrowserHistory();

const enhancer = composeEnhancers(
  applyMiddleware(
    epicMiddleware,
    createRouterMiddleware(history),
    logger as any
  )
);

const persistConfig = {
  key: `root_${REACT_APP_NAME}`,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const store = createStore(persistedReducer, enhancer);

export function makeStore() {
  const persistor = persistStore(store);

  return { store, persistor };
}

export type RootState = ReturnType<typeof store.getState>;
