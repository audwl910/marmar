/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/queries/useAuth';

export default function LoggedRoute({ children }) {
  const { useStudentCheck, useTherapistCheck } = useAuth();
  const { data: student } = useStudentCheck();
  const { data: therapist } = useTherapistCheck();
  if (student || therapist) {
    return <Navigate to="/" replace />;
  }
  return children;
}
