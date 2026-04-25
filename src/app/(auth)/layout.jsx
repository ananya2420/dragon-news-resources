import React from 'react'
import Navbar from '@/components/shared/Navbar'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const AuthLayout = ({ children }) => {
  return (
    <div className={montserrat.className}>
      <Navbar />
      {children}
    </div>
  )
}

export default AuthLayout