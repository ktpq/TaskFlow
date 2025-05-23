'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import TeamList from '../components/team/TeamList'

import { useState } from 'react'


export default function TeamPage() {
  const [createOpen, setCreateOpen] = useState(true);
  const [joinOpen, setJoinOpen] = useState(false);

  const setOpen = (text:string) =>{
    if (text === "create"){
        setCreateOpen(true);
        setJoinOpen(false)
    } else {
        setCreateOpen(false);
        setJoinOpen(true)
    }
  }


  return (
    <main className='min-h-screen gradient'>
        <Navbar/>
        <div className='p-5 flex justify-between items-center mt-5 max-md:flex-col'>
        <h1 className='text-3xl font-bold text-shadow-black ml-10 text-white max-md:ml-0'> Team Management </h1>
        <div className='flex max-md:mt-5'>
            <button className='mr-10 shadow-lg pr-7 pl-5 py-3 flex rounded-md bg-[#5e5dee] font-bold text-white hover:-translate-y-0.5 duration-200 hover:shadow-xl items-center max-md:mr-5 cursor-pointer' onClick={()=>(document.getElementById('create_modal') as HTMLDialogElement)?.showModal()}>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"></path>
                </svg>
                <h2> Create Team </h2>
            </button>

            <button className='mr-10 shadow-lg pr-7 pl-5 py-3 flex rounded-md bg-[#e3489c] font-bold text-white hover:-translate-y-0.5 duration-200 hover:shadow-xl max-md:mr-0 cursor-pointer'>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
                <h2> Join Team </h2>
            </button>
            
        </div>
    </div>

    <TeamList/>

    {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="create_modal" className="modal">
  <div className="modal-box w-[35vw] max-w-none rounded-md">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-2xl text-gradient"> Team Portal {JSON.stringify(createOpen)} {JSON.stringify(joinOpen)}</h3>
    <div className='grid grid-cols-2 mt-3 px-2 py-4 border-b border-[#b1adad]'>
        <button className='cursor-pointer' onClick={() =>{setOpen("create")}}> Create Team </button>
        <button className='cursor-pointer' onClick={() =>{setOpen("join")}}> Join Team </button>
    </div>

    {createOpen ? (
        <section>
            <p className='mt-10'> Team Name </p>
            <input type="text" className='border w-full border-[#b1adad] px-4 py-3 my-2 rounded-lg' placeholder='Enter an awesome team name'/>

            <p className='mt-5'> Description </p>
            <textarea className='border w-full border-[#b1adad] px-4 py-3 my-2 rounded-lg' placeholder="Describe your team's purpose"/>

            <div className='flex justify-end mt-3'>
                <button className='py-2 px-4 gradient text-white rounded-lg hover:-translate-y-1 duration-300'> Create Team </button>
            </div>
        </section>
    ): null}

    {joinOpen ? (
        <section>
            <p className='mt-10'> Team Code </p>
            <input type="text" className='border w-full border-[#b1adad] px-4 py-3 my-2 rounded-lg' placeholder='Enter team invitation code'/>
            <p className='my-3 text-[#615f5f]'> Enter the team code provided by the team admin to join an existing team. </p>

            <div className='flex justify-end mt-3'>
                <button className='py-2 px-4 bg-team text-white rounded-lg hover:-translate-y-1 duration-300'> Join Team </button>
            </div>
        </section>
    ): null}
    
    
  </div>
</dialog>
    
    

    
    
   
        

        
        
    </main>
    
  )
}

