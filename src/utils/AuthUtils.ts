import { Permission } from '../models/Permission';

export const hasRoutePermissions = (
  permissions: string | string[],
  currentUser: any
) => {
  if (currentUser.id === 0) {
    return false;
  }

  const currentPermissions: Permission[] = currentUser.permissions || [];

  if (typeof permissions === 'string') {
    permissions = [permissions];
  }

  if (permissions.length === 0) {
    return true;
  } else {
    let check = 0;

    for (let permission of permissions) {
      permission = permission.trim().toUpperCase();

      if (
        currentPermissions.find((currentPermission: Permission) => {
          return currentPermission.code === permission;
        })
      ) {
        check++;
      }
    }

    return check === permissions.length;
  }
};
