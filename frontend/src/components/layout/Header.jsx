import React from 'react';
import { useAuth } from '../../context/AuthContext';
import profileImage from '../../assets/profile.png'; 

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 flex items-center justify-between px-8 bg-white shadow">
      <div className="flex flex-row-reverse items-center gap-4 w-full justify-between">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-full object-cover border border-gray-300"
            src={profileImage}
            alt="User"
          />
          <div className="text-right">
            <p className="font-semibold text-gray-800">
              Hello {user?.name || 'User'}!
            </p>
            <p className="text-sm text-gray-500">{user?.phone}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 px-3 py-1 rounded-lg transition"
        >
          התנתק
        </button>
      </div>
    </header>
  );
};

export default Header;
