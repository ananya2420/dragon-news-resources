'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import NaavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import userAvatar from '@/assets/user.png';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log(user, isPending, "user");

  const avatarSrc =
    typeof user?.image === "string" && user.image.length > 5
      ? user.image
      : userAvatar;

  return (
    <div className='container mx-auto flex justify-between gap-4 mt-6'>
      
      <div></div>

      <ul className='flex justify-between items-center text-green-500 gap-3'>
        <li><NaavLink href={'/'}>Home</NaavLink></li>
        <li><NaavLink href={'/about-us'}>About</NaavLink></li>
        <li><NaavLink href={'/career'} className={"text-yellow-500"}>Career</NaavLink></li>
      </ul>

      {isPending? (
        <span className="loading loading-spinner loading-lg"></span>
      ):user ? (
        <div className='flex items-center gap-2'>
          <h2>{user?.name || "Guest"}</h2>

          <Image
            src={avatarSrc}
            alt="user Avatar"
            width={60}
            height={60}
          />

          <button className='btn bg-purple-500 text-white' onClick={async()=>await authClient.signOut()}>
            Logout
          </button>
        </div>
      ) : (
        <button className='btn bg-purple-500 text-white'>
          <Link href={'/login'}>Login</Link>
        </button>
      )}

    </div>
  );
};

export default Navbar;