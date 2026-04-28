import React from 'react'
import Navbar from '@/components/shared/Navbar'
import { Montserrat } from 'next/font/google'
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient("mongodb://localhost:27017/database");
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});
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