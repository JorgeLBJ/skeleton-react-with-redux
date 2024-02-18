import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import setUpInterceptor from './utils/AxiosInterceptos';
import { AuthService } from './services/AuthService';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import AuthAction from './redux/actions/authActions/Actions';
import AppRoutes from './routes/routes';
import { User } from './models/User';

import './App.scss';

function App() {
  const store = useStore();
  const { token } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  /* Iniciando los interceptores de axios para el token */
  setUpInterceptor(store);

  useEffect(() => {
    init();
  }, [dispatch, store]);

  const init = async () => {
    await verifySession();
    setLoading(false);
  };

  /* Rehidratación del usuario logeado */
  const verifySession = async (): Promise<void> => {
    if (token) {
      const verifyUserSessionResponse = await AuthService.verifySession(token);

      if (verifyUserSessionResponse.success) {
        dispatch(AuthAction.signIn(verifyUserSessionResponse.data as User));
      } else {
        dispatch(AuthAction.signOut({}));
      }
    } else {
      dispatch(AuthAction.signOut({}));
    }
  };

  return <>{loading ? <LoadingScreen /> : <AppRoutes />}</>;
}

export default App;
