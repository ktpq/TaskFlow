'use client'
import React from 'react'
import { useState } from 'react'
import ProfileModal from './ProfileModal'


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const showProfile = () =>{
    (document.getElementById('profile_modal') as HTMLDialogElement).showModal()
  }
  return (
    <>
      <nav className="flex bg-base-100 shadow-sm justify-between items-center p-3 bg-main">
    <div className="ml-30 max-md:ml-5">
      <a className="text-2xl font-bold text-gradien flex items-center text-gradient" href='/team'> 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
          </svg>
          <h1 className='ml-3'> TaskFlow</h1>
      </a>
    </div>

    <div className="flex gap-2 mr-30 max-md:hidden">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-main rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><button onClick={showProfile}>Your Profile</button></li>
          <li><a href='/'>Logout</a></li>
        </ul>
      </div>
    </div>

    <img src="./menu.png" alt="" width={30} className='mr-5 hidden max-md:block' onClick={() =>{setIsOpen(!isOpen)}}/>

  </nav>

  {/* จอเล็ก */}

  <div className={`overflow-hidden transition-all duration-300 ease-in-out transform origin-top px-10 space-y-4 py-5 md:hidden bg-main shadow-md ${ isOpen ? 'scale-y-100 max-h-96 opacity-100' : 'scale-y-0 max-h-0 opacity-0 pointer-events-none' }`}>
  <button className="block w-full py-2 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg text-center" onClick={showProfile}>
    Your profile
  </button>
  <a className="block w-full py-2 text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-lg shadow-lg text-center" href="/" >
    Logout
  </a>
</div>

  {/* You can open the modal using document.getElementById('ID').showModal() method */}
  <ProfileModal/>

    </>



  )
}
