import React from 'react'

export default function ProfileModal() {
  return (
    <dialog id="profile_modal" className="modal">
  <div className="modal-box w-[25vw] max-w-none max-lg:w-[70vw] max-md:w-[95vw]">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-2xl"> Your Profile </h3>

    <div className="avatar w-full mx-auto">
        <div className="ring-primary ring-offset-base-100 w-32 rounded-full ring-2 ring-offset-2 mx-auto my-5">
          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
    </div>

    <h1 className='text-center text-xl font-extrabold'> John Doe </h1>
    <p className='text-center text-[#575454]'> john.doe@example.com </p>

    <p className='text-[#575454] my-3 py-2 border-b border-[#bdb7b7]'> Account Information </p>

    <div className='flex justify-between my-4'>
       <p className='text-[#575454]'> Member since </p>
       <p className='text'> January 15, 2023 </p>
    </div>

    <div className='flex justify-between my-4'>
       <p className='text-[#575454]'> Tasks completed </p>
       <p className='text'> 42 </p>
    </div>

    <div className='flex justify-between my-4'>
       <p className='text-[#575454]'> Active projects </p>
       <p className='text'> 3 </p>
    </div>

    <button className='gradient text-white w-full mt-5 py-2 rounded-lg shadow-lg hover:shadow-xl'> Edit profile </button>

  </div>
</dialog>
  )
}
