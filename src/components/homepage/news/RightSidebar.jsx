'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import swimming from "../../../assets/swimming.png";
import classBar from "../../../assets/class.png";
import playground from "../../../assets/playground.png";
import bg from "../../../assets/bg.png"

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

          <div className="w-80 space-y-6">
      {/* Find Us On */}
      <div className="bg-white border rounded-md shadow-sm">
        <h2 className="text-lg font-semibold p-4 border-b">Find Us On</h2>

        <div className="p-4 space-y-3">
          {/* Facebook */}
          <div className="flex items-center gap-3 p-2 border rounded-md hover:bg-gray-50 cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
              F
            </div>
            <span className="text-gray-700">Facebook</span>
          </div>

          {/* Twitter */}
          <div className="flex items-center gap-3 p-2 border rounded-md hover:bg-gray-50 cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center bg-sky-100 text-sky-600 rounded-full">
              T
            </div>
            <span className="text-gray-700">Twitter</span>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-3 p-2 border rounded-md hover:bg-gray-50 cursor-pointer">
            <div className="w-8 h-8 flex items-center justify-center bg-pink-100 text-pink-600 rounded-full">
              I
            </div>
            <span className="text-gray-700">Instagram</span>
          </div>
        </div>
      </div>

      {/* Q-Zone */}
      <div className="bg-gray-100 rounded-md p-4">
        <h2 className="text-lg font-semibold mb-4">Q-Zone</h2>

        <div className="space-y-4">
          {/* Swimming */}
          <div className="bg-white p-2 rounded-md shadow-sm">
        

            <Image src={swimming.src} alt="Swimming" width={300} height={200} />
            <p className="text-center font-medium mt-2">Swimming</p>
          </div>

          {/* Class */}
          <div className="bg-white p-2 rounded-md shadow-sm">
           <Image src={classBar.src} alt="Class" width={300} height={200} />
            <p className="text-center font-medium mt-2">Class</p>
          </div>

          {/* Playground */}
          <div className="bg-white p-2 rounded-md shadow-sm">
           <Image src={playground.src} alt="Playground" width={300} height={200} />
            <p className="text-center font-medium mt-2">Play Ground</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Image src={bg.src} alt="bg" width={300} height={200} />
    </div>
    </div>
  );
};

export default RightSidebar;