'use client';

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaFacebook } from 'react-icons/fa';

const RightSidebar = () => {

 
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data, "data");
  };


    const handleGithubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data, "data");
  };
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="font-bold text-lg mb-4 text-gray-800">Login with</h2>

      <div className="flex flex-col gap-3">
        
        <button
          onClick={handleGoogleSignin}
          className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200 font-medium"
        >
          <FaFacebook className="text-lg" />
          Login with Google
        </button>

        <button
        onClick={handleGithubSignin}
          className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200 font-medium"
        >
          <FaGithub className="text-lg" />
          Login with GitHub
        </button>

      </div>
    </div>
  );
};

export default RightSidebar;