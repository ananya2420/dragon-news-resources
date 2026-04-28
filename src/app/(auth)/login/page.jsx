'use client';

import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form';

const LoginPage = () => {

  const {register,handleSubmit,watch,formState:{errors}}=useForm();

  const handleLoginFunc=(data)=>{
         //e.preventDefault();
  //const email=e.target.email.value;
  //const password=e.target.password.value;
  //console.log(email,password);

  console.log(data,"data");

  }
  //console.log(watch("email"));
  //console.log(watch("password"));
  return (
    <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
      <div className='p-4 rounded-xl bg-white text-black'>
      <h2 className='font-bold text-3xl text-center mb-6'>Login your account</h2>

      <form action="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input type="email" className="input" placeholder="Type here Email" {...register("email",{
            required:"Email field is required",
          })}/>
         
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
</fieldset>
          
          <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input type="password" className="input" placeholder="Type here password" {...register("password",{ required:"password field is required" })}/>
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
</fieldset>

          <button className="btn w-full bg-slate-800 text-white">Login</button>

          <p className='mt-4'>Do not Have An Account ?<Link href={"/register"} className='text-blue-500'>Register</Link> </p>

      </form>
      </div>
    </div>
  )
}

export default LoginPage
