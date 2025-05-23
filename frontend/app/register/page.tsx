'use client'
import React from 'react'
import { useEffect } from 'react'
import "aos/dist/aos.css"
import AOS from "aos"

export default function LoginPage() {
  useEffect(() =>{
    AOS.init();
  })
  
  return (
    <div className="bg-main font-main flex justify-center items-center h-screen">
    <main className='w-[20vw] max-lg:w-[70vw] max-md:w-[100vw]' data-aos="fade-up" data-aos-duration="1000">
        <section className='flex flex-col items-center space-y-4'>
            <div className='w-fit p-2 rounded-xl gradient shadow-lg hover:-translate-y-0.5 duration-200'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-15 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
              
            <h1 className='text-3xl font-extrabold text-[#212839] text-shadow-black'> TaskFlow </h1>
            <p className='text-[#212839] font-light'> Manage your tasks with ease and style </p>
        </section>
        <section className='mt-5 px-10 py-10 bg-white shadow-lg rounded-xl'>
            <h2 className='text-2xl font-bold text-[#212839] mb-5 text-shadow-black'> Create Account </h2>
            <label className='text-sm'> Username </label>
            <input type="text" className='border-gray-300 border block w-full py-2.5 px-4 mt-1 rounded-xl text-[12px] mb-5' placeholder='John Doe'/>

            <label className='text-sm'> Email </label>
            <input type="text" className='border-gray-300 border block w-full py-2.5 px-4 mt-1 rounded-xl text-[12px] mb-5' placeholder='your@example.com'/>

            <label className='text-sm'> Password </label>
            <input type="password" className='border-gray-300 border block w-full py-2.5 px-4 mt-1 rounded-xl text-[12px] mb-5' placeholder='********'/>

            <label className='text-sm'> Password </label>
            <input type="password" className='border-gray-300 border block w-full py-2.5 px-4 mt-1 rounded-xl text-[12px]' placeholder='********'/>

            <button className='w-full my-4 py-3 text-sm shadow-md rounded-2xl gradient text-white font-medium hover:shadow-lg duration-300 hover:-translate-y-0.5'> Create Account </button>
            <p className='text-center'> Already have an account? <a href="/" className='text-blue-500 hover:text-blue-700 duration-200'> Sign in </a> </p> 
        </section>
    </main>
    </div>
  )
}

