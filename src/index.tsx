import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { history, makeStore } from './redux/reducers';
import { ReduxRouter } from '@lagunovsky/redux-react-router';
import { Provider } from 'react-redux';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

import './App.scss';

const { persistor, store } = makeStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const PG = PersistGate as any;

root.render(
  <Provider store={store}>
    <PG loading={<LoadingScreen />} persistor={persistor}>
      <ReduxRouter history={history}>
        <App />
      </ReduxRouter>
    </PG>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
