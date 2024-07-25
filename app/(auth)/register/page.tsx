"use client";
import React from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { FormState, registerAction } from './action'
import { useFormState } from 'react-dom';
import FormButton from '../../../components/ui/formButton';

const initialState: FormState = {
    message: ""
}

const Register = () => {
    const [state,formAction] = useFormState(registerAction,initialState)
   

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form action={formAction}>
      
        <div className="mb-4">
          <label className="block mb-1 text-gray-600" htmlFor="email">
            Email
          </label>
          <div className="flex items-center border rounded px-3 py-2">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              id="email"
              type="email"
              name='email'
              className="flex-1 outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-gray-600" htmlFor="password">
            Password
          </label>
          <div className="flex items-center border rounded px-3 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              id="password"
              name='password'
              type="password"
              className="flex-1 outline-none"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-gray-600" htmlFor="password">
            confirmPassword
          </label>
          <div className="flex items-center border rounded px-3 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              id="password"
              name='confirm-password'
              type="password"
              className="flex-1 outline-none"
              placeholder="Enter your confirmPassword"
            />
          </div>
        </div>
       <FormButton text="Register" /> 
        <div className='text-green-500'>{state.message}</div>
        <div className='text-red-500'>{state.error}</div>
      </form>
    </div>
  </div>
  )
}

export default Register