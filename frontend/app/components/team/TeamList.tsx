import React from 'react'


export default function TeamList() {
  const teams = ["team1"];
  
  return (
    <section className="container mx-auto mt-10 overflow-x-hidden">
        <div className='flex items-center py-5 text-white m-5'>
            <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
            <h3 className='text-2xl font-extrabold text-shadow-black'> Your Teams </h3>
        </div>


        {/* ไม่มีทีม */}

        {teams.length === 0 ? (
            <div className='flex justify-center items-center h-[350px] rounded-xl border-dashed border border-[#abaaaa] m-5 bg-[#ffffff15]'>
            <div className='flex flex-col items-center space-y-2'>
                <svg className="w-15 h-15 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
                <h2 className='text-xl text-white'> No teams yet ?</h2>
                <p className='text-[#abaaaa]'> Create your first team to get started </p>
            </div>
        </div>
        ) : (
            <div className='grid grid-cols-4 gap-7 m-5 max-lg:grid-cols-2 max-md:grid-cols-1'>

            <div className='p-5 font-bold shadow-lg rounded-lg text-white bg-team hover:shadow-xl duration-300 hover:-translate-y-1.5'>
                <div className='flex '>
                    <div className="avatar">
                        <div className="w-12 rounded-[100%]">
                            <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                        </div>
                    </div>

                    <div className='ml-5'>
                        <h2 className='text-xl'> test </h2>
                        <p className='text-sm font-light'> 1 members </p>
                    </div>
                </div>

                <p className='mt-3 text-sm font-light'> test test </p>

                <div className='flex justify-between text-sm p-3 mt-3 shadow-md bg-[#ce6d9e] rounded-lg'>
                    <h2> Team code </h2>
                    <h3> HELLOWORLD </h3>
                </div>

                <div className='text-sm flex justify-between mt-4'>
                    <button className='px-3 py-2 bg-[#ce6d9e] rounded-lg shadow-md hover:bg-[#c285a3] duration-300'> Invite Members </button>
                    <a className='px-3 py-2 bg-white rounded-lg text-[#d01673] shadow-md hover:bg-[#e7e5e5] duration-300' href='/team/1'> Enter Team </a>
                </div>
            </div>

        </div>
        )}

        

        {/* มีทีม */}
        

    </section>
  )
}
