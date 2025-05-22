import React from 'react';
import ErrorPage from './ErrorPage';

export default function NotFound() {
  return <ErrorPage errorCode={404} />;
}
