import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

type PrivateRouteProps = {
  outlet: JSX.Element;
};

function GuestRoute({ outlet }: PrivateRouteProps) {
  const user = useSelector((state: any) => state.auth);

  if (user?.id === 0) {
    return outlet;
  }

  return <Navigate to="/home" />;
}

export default GuestRoute;
