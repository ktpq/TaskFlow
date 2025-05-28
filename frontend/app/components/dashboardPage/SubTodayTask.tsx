import { getPriority } from 'os'
import React from 'react'

interface Props{
    priority:string
}

export default function SubTodayTask({priority}:Props) {

  const getPriorityColor = (priority:string) =>{
    switch(priority){
        case 'High':
            return 'bg-[#fde2e1] text-[#dc2625]'
        case 'Medium':
            return 'bg-[#fdf3c8] text-[#ff8905]'
        case 'Low':
            return 'bg-[#dbfce8] text-[#163a03]'
    }
  }
  
  return (
    <div className="my-5 p-5 flex shadow-md border border-gray-200 rounded-md hover:translate-x-1.5 duration-200">
        <input type="checkbox" className="checkbox checkbox-neutral scale-125"/>
        <div className="ml-5 space-y-2.5">
                <h3 className="text-lg font-bold"> Client meeting with Acme group </h3>
                <p className="font-light"> Discuss project timeline and deliverables </p>
                <p className={`w-fit px-2 py-1 rounded-lg shadow-md ${getPriorityColor(priority)}`}> {priority} Priority </p>
        </div>
    </div>
  )
}
