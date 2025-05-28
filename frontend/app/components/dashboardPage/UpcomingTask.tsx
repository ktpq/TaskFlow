import React from 'react'
import SubUpcomingTask from './SubUpcomingTask'

export default function UpcomingTask() {
  return (
    <section className="mt-5 bg-white p-5 shadow-md border border-gray-200 rounded-lg">
         <h2 className="font-bold text-xl"> Upcoming Work <span className="font-light text-lg">  (Sorted by Deadline)</span></h2>
          <SubUpcomingTask priority="High"/>
          <SubUpcomingTask priority="Medium"/>
          <SubUpcomingTask priority="Low"/>
         
         
      </section>
  )
}
