'use client'
import React from 'react'

import { useState } from 'react'

import SidebarButton from './SidebarButton';
import ProfileModal from './ProfileModal';

export default function Sidebar() {
  const [dashBoardOpen, setDashboardOpen] = useState<boolean>(true);
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false)
  const [noteOpen, setNoteOpen] = useState<boolean>(false)
  const [memberOpen, setMemberOpen] = useState<boolean>(false)

  const openDashboard = () => {
    setDashboardOpen(true)
    setCalendarOpen(false)
    setNoteOpen(false)
    setMemberOpen(false)
  }

  const openCalendar = () =>{
    setCalendarOpen(true)
    setDashboardOpen(false)
    setNoteOpen(false)
    setMemberOpen(false)
  }

  const openNote = () => {
    setNoteOpen(true)
    setCalendarOpen(false)
    setDashboardOpen(false)
    setMemberOpen(false)
  }

  const openMember = () =>{
    setMemberOpen(true)
    setDashboardOpen(false)
    setCalendarOpen(false)
    setNoteOpen(false)
  }

  const showProfile = () =>{
    (document.getElementById('profile_modal') as HTMLDialogElement).showModal()
  }
  return (
    <>
    <div className='fixed top-0 left-0 w-[290px] h-screen gradient shadow-lg flex flex-col justify-between z-50'>

        <section>
            <a className="text-2xl font-bold text-white flex items-center px-6 pt-5" href='/team'> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
                <h1 className='ml-3'> TaskFlow</h1>
            </a>
            
        
            <div className='flex flex-col mt-10 space-y-6 p-5'>
                <SidebarButton open={dashBoardOpen} setOpen={openDashboard} src="../home.png" title='Dashboard'/>
                <SidebarButton open={calendarOpen} setOpen={openCalendar} src="../calendar.png" title='Calendar'/>
                <SidebarButton open={noteOpen} setOpen={openNote} src="../note.png" title='Stickys Notes'/>
                <SidebarButton open={memberOpen} setOpen={openMember} src="../member.png" title='Members'/>
            </div>
        </section>

        <section className='flex mx-auto items-center'>
          <div className="avatar w-fit mx-2">
            <div className="ring-primary ring-offset-base-100 w-17 rounded-full ring-2 ring-offset-2 my-5 border" onClick={showProfile}>
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>
          <div className='mx-2'>
              <button className='text-white bg-red-500 px-3 py-1 shadow-md rounded-md hover:bg-red-600 hover:shadow-lg duration-300'> Quit Team </button>
          </div>
        </section>
    </div>
    <ProfileModal/>
    </>
  )
}
