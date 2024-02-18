import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Unauthorized from '../../scenes/Unauthorized/Unauthorized';
import { hasRoutePermissions } from '../../utils/AuthUtils';

type PrivateRouteProps = {
  outlet: JSX.Element;
  permissionsRequired?: string | string[];
};

function PrivateRoute({ outlet, permissionsRequired = [] }: PrivateRouteProps) {
  const user = useSelector((state: any) => state.auth);

  if (user?.id !== 0 && hasRoutePermissions(permissionsRequired, user)) {
    return outlet;
  } else if (
    user?.id !== 0 &&
    !hasRoutePermissions(permissionsRequired, user)
  ) {
    return <Unauthorized />;
  }
  return <Navigate to="/login" />;
}

export default PrivateRoute;
