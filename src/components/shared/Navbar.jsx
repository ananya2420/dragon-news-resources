import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import userAvatar from '@/assets/user.png'
import NaavLink from './NavLink'



const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between gap-4 mt-6'>
      <div></div>
      <ul className='flex justify-between item-center text-green-500 gap-3'>
        <li><NaavLink href={'/'}>Home</NaavLink></li>
         <li><NaavLink href={'/about-us'}>About</NaavLink></li>
          <li><NaavLink href={'/career'} className={"text-yellow-500"}>Career</NaavLink></li> 
      </ul>

      <div className='flex items-center gap-2'>
        <Image src={userAvatar} alt="user avatar" width={60} height={60}/>
        <button className='btn bg-purple-500 text-white'><Link href={'/login'}>Login</Link></button>

      </div>
    </div>
  )
}

export default Navbar
