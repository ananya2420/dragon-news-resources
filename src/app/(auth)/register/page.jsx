
'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {

  const {register,handleSubmit,watch,formState:{errors}}=useForm();

  const [isShowPassword,setIsShowPassword]=useState(false);

  const handleRegisterFunc=async(data)=>{
         //e.preventDefault();
  //const email=e.target.email.value;
  //const password=e.target.password.value;
  //console.log(email,password);

  console.log(data,"data");
  const {email,name,photo,password}=data;
  console.log(name,photo);
  
  const {data:res,error} =await authClient.signUp.email({
     name: name, // required
    email: email, // required
    password: password, // required
    image: "photo",
    callbackURL: "/",
  });

  console.log(res,error);
  if(error){
    alert(error.message)
  }
  if(res){
    alert("Signup Successful");
  }
  }
  //console.log(watch("email"));
  //console.log(watch("password"));
  return (
    <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
      <div className='p-4 rounded-xl bg-white text-black'>
      <h2 className='font-bold text-3xl text-center mb-6'>Register your account</h2>

      <form action="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
          <legend className="fieldset-legend">Name</legend>
          <input type="text" className="input" placeholder="Type here Name" {...register("name",{
            required:"Name field is required",
          })}/>
         
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
</fieldset>

            <fieldset className="fieldset">
          <legend className="fieldset-legend">Photo url</legend>
          <input type="text" className="input" placeholder="Type here photo url" {...register("photo",{
            required:"Photo field is required",
          })}/>
         
          {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
</fieldset>

           <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input type="email" className="input" placeholder="Type here Email" {...register("email",{
            required:"Email field is required",
          })}/>
         
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
</fieldset>

          
          <fieldset className="fieldset relative">
          <legend className="fieldset-legend">Password</legend>
          <input type="password" className="input" placeholder="Type here password" {...register("password",{ required:"password field is required" })}/>
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
</fieldset>

           <span className="absolute right-6 top-4 cursor-pointer" onClick={()=>setIsShowPassword(!isShowPassword)}>
                      {isShowPassword? <FaEye />:<FaEyeSlash />}</span>

          <button className="btn w-full bg-slate-800 text-white">Register</button>

       

      </form>
      </div>
    </div>
  )
}

export default RegisterPage
