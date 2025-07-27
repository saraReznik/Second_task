import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading) return <p className="text-center mt-10">טוען...</p>;

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
