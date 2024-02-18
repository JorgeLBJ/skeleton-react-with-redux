import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthAction from '../../redux/actions/authActions/Actions';
import { AuthService } from '../../services/AuthService';
import { User } from '../../models/User';

import './Home.scss';

function Home() {
  const dispatch = useDispatch();
  const user: User = useSelector((state: any) => state.auth);

  const logout = async () => {
    await AuthService.logout();
    dispatch(AuthAction.signOut({}));
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        padding: '20px 20px',
      }}
    >
      <div
        style={{
          width: '400px',
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
        }}
      >
        <p>
          Bievenido usuario:{' '}
          <b>
            {user.name} {user.lastname}
          </b>
        </p>

        <pre
          style={{
            overflowX: 'auto',
            backgroundColor: '#f4f4f4',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            maxHeight: '70vh',
            fontFamily: `'Courier New', Courier, monospace`,
            color: '#333',
            fontSize: '13px',
          }}
        >
          {JSON.stringify(user, null, 2)}
        </pre>

        <button
          style={{
            height: '35px',
            border: '1px solid #ccc',
            borderRadius: '3em',
            color: 'white',
            backgroundColor: 'darkgoldenrod',
            cursor: 'pointer',
          }}
          onClick={() => {
            logout();
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Home;
