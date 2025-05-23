import React from 'react'

interface props{
    setOpen:(value:string) => void;
    createOpen:boolean
    joinOpen:boolean
}

export default function Modal({setOpen, joinOpen, createOpen}: props) {
  return (
    <>
    <dialog id="modal" className="modal">
  <div className="modal-box w-[35vw] max-w-none rounded-md">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-2xl text-gradient"> Team Portal </h3>
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
    </>
  )
}
