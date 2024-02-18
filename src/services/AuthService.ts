import MainBackendAxios from '../utils/MainBackendAxios';
import { User } from '../models/User';
import { LoginDto } from '../models/dtos/LoginDto';
import { fakeApi } from '../utils/FakeApi';

export const AuthService = {
  login: async (loginParams: LoginDto) => {
    const user = fakeApi.users.find((userRow) => {
      return (
        userRow.username.toLowerCase() === loginParams.username.toLowerCase() &&
        userRow.password.toLowerCase() === loginParams.password.toLowerCase()
      );
    });

    if (user) {
      return {
        success: true,
        data: {
          id: user.id,
          username: user.username,
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          avatar: user.avatar,
          token: user.token,
          permissions: user.permissions,
        } as User,
      };
    } else {
      return {
        success: false,
        data: 'Credenciales incorrectas',
      };
    }
  },
  verifySession: async (token: string) => {
    // const response = await MainBackendAxios.post(`/auth/get-current-user`);

    const user = fakeApi.users.find((userRow) => {
      return userRow.token === token;
    });

    if (user) {
      return {
        success: true,
        data: {
          id: user.id,
          username: user.username,
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          avatar: user.avatar,
          token: user.token,
          permissions: user.permissions,
        } as User,
      };
    } else {
      return {
        success: false,
        data: 'El token enviado está expirado o no es correcto.',
      };
    }
  },
  logout: async () => {
    return {
      success: true,
      data: null,
    };
  },
};
