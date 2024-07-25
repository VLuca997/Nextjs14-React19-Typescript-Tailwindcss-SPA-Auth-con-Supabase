import FormButton from '@/components/ui/formButton'
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'


const Login = async() => {

    const loginAction = async(formData: FormData) =>{
        'use server'

        const supabaseClient = createClient()

        const email = formData.get("email") as string
        const password = formData.get("password") as string
        
        const {error} = await supabaseClient.auth.signInWithPassword({
            email, password
        })

        if (error){
            console.log(error.message)
            return error.message
        }
        redirect('/home') // redirect dopo il  login
    }
    return (
        <div>
            <div className="h-screen  flex">
                <div className="hidden lg:flex w-full lg:w-1/2 login_img_section
              justify-around items-center bg-personal">
                    <div
                        className=" 
                      bg-black 
                      opacity-20 
                      inset-0 
                      z-0"
                    >

                    </div>
                    <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                        <h1 className="text-white font-bold text-4xl font-sans">Simple App</h1>
                        <p className="text-white mt-1">The simplest app to use</p>
                        <div className="flex justify-center lg:justify-start mt-6">
                            <a href="#" className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                    <div className="w-full px-8 md:px-32 lg:px-24">
                        <form 
                            action={loginAction}
                            className="bg-white rounded-md shadow-2xl p-5">
                            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                            <p className="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
                            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <input id="email" className=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" />
                            </div>
                            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <input className="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Password" />

                            </div>
                            <FormButton text='Login'/>
                            
                            <div className="flex justify-between mt-4">
                                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password ?</span>
                                
                                <Link href="/register" className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">REGISTRATI ZIOO</Link>
                            </div>

                        </form>
                    </div>

                </div>
            </div></div>
    )
}

export default Login