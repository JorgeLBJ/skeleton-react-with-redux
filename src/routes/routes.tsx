import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GuestRoute from './components/GuestRoute';
import PrivateRoute from './components/PrivateRoute';
import Home from '../scenes/Home/Home';
import Login from '../scenes/Login/Login';
import NotFound from '../scenes/NotFound/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<PrivateRoute outlet={<Home />} />} />
      <Route path="/login" element={<GuestRoute outlet={<Login />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
