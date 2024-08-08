import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Implement your sign-out logic here
    // For example, clear local storage, reset auth state, etc.
    console.log('User signed out');
    // After signing out, navigate to the home page
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Sign Out</h1>
      <p className="mb-4">Are you sure you want to sign out?</p>
      <button
        onClick={handleSignOut}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
