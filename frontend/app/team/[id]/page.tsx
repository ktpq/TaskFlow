'use client'
import React, { useState } from 'react'

import Sidebar from '@/app/components/Sidebar'
import Dashboard from '@/app/components/dashboardPage/Dashboard'
import Calendar from '@/app/components/calendarPage/Calendar'
import { useEffect } from 'react'

interface PageProp {
  params: {
    id: string
  }
}

export default function Page({ params }: PageProp) {
  const [dashBoardOpen, setDashboardOpen] = useState<boolean>(false)
  const [calendarOpen, setCalendarOpen] = useState<boolean>(true)
  const [noteOpen, setNoteOpen] = useState<boolean>(false)
  const [memberOpen, setMemberOpen] = useState<boolean>(false)

  const openDashboard = () => {
    setDashboardOpen(true)
    setCalendarOpen(false)
    setNoteOpen(false)
    setMemberOpen(false)
  }

  const openCalendar = () => {
    setDashboardOpen(false)
    setCalendarOpen(true)
    setNoteOpen(false)
    setMemberOpen(false)
  }

  const openNote = () => {
    setDashboardOpen(false)
    setCalendarOpen(false)
    setNoteOpen(true)
    setMemberOpen(false)
  }

  const openMember = () => {
    setDashboardOpen(false)
    setCalendarOpen(false)
    setNoteOpen(false)
    setMemberOpen(true)
  }

  useEffect(() =>{
    console.log(dashBoardOpen)
    console.log(calendarOpen)
  }, [])
  return (
    <main className="bg-main min-h-screen flex">
      <Sidebar
        dashBoardOpen={dashBoardOpen}
        calendarOpen={calendarOpen}
        noteOpen={noteOpen}
        memberOpen={memberOpen}
        openDashboard={openDashboard}
        openCalendar={openCalendar}
        openNote={openNote}
        openMember={openMember}
      />
      
      
        {dashBoardOpen ? (
          <Dashboard />
        ): calendarOpen ?(
          <Calendar />
        ): null}

    </main>
  )
}
