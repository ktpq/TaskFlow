import React from 'react'


import Sidebar from '@/app/components/Sidebar'
import Dashboard from '@/app/components/dashboardPage/Dashboard'



interface PageProp{
    params: {
        id: string
    }
}

export default function page({params}:PageProp) {
  return (
    <main className='bg-main min-h-screen flex'>
    {/* <WhiteNavbar/> */}
    
    <Sidebar/>
    <Dashboard/>
    </main>
  )
}
