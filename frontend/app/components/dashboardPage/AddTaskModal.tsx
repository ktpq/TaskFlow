import React from 'react'

export default function AddTaskModal() {
  return (
    <dialog id="modal" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-xl">Add New Task </h3>

    <p className="pt-4 pb-2">Task title</p>
    <input type="text" className='border w-full border-gray-300 py-2 rounded-lg px-3'/>

    <p className="pt-4 pb-2">Description</p>
    <textarea className='border w-full border-gray-300 py-2 rounded-lg px-3'/>

    <div className='grid grid-cols-2 gap-5 pt-4'>
        <div className=''>
            <p className='pb-2'> Due Date </p>
            <input type="date" className='border border-gray-300 p-2 w-full rounded-lg'/>
        </div>

        <div className=''>
            <p className='pb-2'> Due Date </p>
            <select name="priority" id="" className='border border-gray-300 w-full p-2 rounded-lg'>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        </div>
    </div>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-white">Close</button>
      </form>
      <button className='gradient text-white px-3 py-1 rounded-md shadow-md'> Save Task </button>
    </div>
  </div>
</dialog>
  )
}
