import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthAction from '../../redux/actions/authActions/Actions';
import { AuthService } from '../../services/AuthService';

import './Login.scss';
import { User } from '../../models/User';

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    if (username.length === 0) {
      alert('Debe de ingresar el username');
      return;
    }

    if (password.length === 0) {
      alert('Debe de ingresar el password');
      return;
    }

    const loginResponse = await AuthService.login({
      username,
      password,
    });

    if (loginResponse.success) {
      dispatch(AuthAction.signIn(loginResponse.data as User));
    } else {
      alert(loginResponse.data);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        padding: '20px 20px',
        gap: '20px',
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
        <h1
          style={{
            color: 'gray',
            fontWeight: '700',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '20px',
          }}
        >
          Login
        </h1>

        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          autoComplete="off"
          style={{ padding: '8px 8px', borderRadius: '3em' }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          autoComplete="off"
          style={{ padding: '8px 8px', borderRadius: '3em' }}
        />
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
            login();
          }}
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}

export default Login;
