import { Permission } from './Permission';

export interface User {
  id: number;
  username: string;
  name: string;
  lastname: string;
  email: string;
  avatar: string | null;
  permissions: Permission[];
  token: string | null;
}
