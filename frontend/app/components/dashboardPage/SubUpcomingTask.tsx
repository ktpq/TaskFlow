import React from 'react'

interface Props{
  priority:string
}

export default function SubUpcomingTask({priority}:Props) {
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

  const getTagColor = (priority:string) =>{
    switch(priority){
        case 'High':
            return 'bg-red-500'
        case 'Medium':
            return 'bg-yellow-500'
        case 'Low':
            return 'bg-green-500'
    }
  }
  return (
    <div className="my-5 p-5 flex justify-between items-center relative rounded-l-lg">
        <span className={`w-[8px] absolute left-0 top-0 bottom-0 rounded-lg ${getTagColor(priority)}`}></span>
        <h3 className="ml-5"> Design team meeting </h3>
        <h3 className={`w-fit px-4 py-1 rounded-xl shadow-lg ${getPriorityColor(priority)}`}> {priority} </h3>
     </div>
  )
}
