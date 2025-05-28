'use client'
import React from 'react'

import SubTodayTask from './SubTodayTask'
import AddTaskModal from './AddTaskModal'

export default function TodayTask() {

  const openAddTask = () =>{
    (document.getElementById('modal') as HTMLDialogElement)?.showModal()
  }
  return (
    <>
    <section className="border mt-5 p-5 bg-white shadow-lg border-gray-200 rounded-lg">
          <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold"> Today's Tasks </h2>
              <button className="gradient text-white rounded-md px-3 py-1" onClick={openAddTask}> Add Task </button>
          </div>

          <SubTodayTask priority='High'/>
          <SubTodayTask priority='Medium'/>
          <SubTodayTask priority='Low'/>
          
      </section>

      {/* Addtask Modal */}
    <AddTaskModal/>
      
    </>
  )
}
