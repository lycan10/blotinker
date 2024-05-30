import React from 'react';
import { FaSpinner } from 'react-icons/fa';

export const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center loader-container">
      <FaSpinner className="spinner-icon" />
    </div>
  );
};