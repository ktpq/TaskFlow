import React from 'react'

export default function Status() {
  return (
    <section className="grid grid-cols-3 gap-5 mt-5">
        <div className="px-4 py-6 flex items-center shadow-lg rounded-lg hover:-translate-y-1 duration-200 border-gray-200 border bg-white">

            <div className="w-18 h-18 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
            </div>
            <div className="ml-4">
                <h3 className="text-lg text-gray-500"> Today's task </h3>
                <h4 className="text-xl font-bold"> 5 </h4>
            </div>
        </div>
        <div className="px-4 py-6 flex items-center shadow-lg rounded-lg hover:-translate-y-1 duration-200 border-gray-200 border bg-white">

            <div className="w-18 h-18 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>

            <div className="ml-4">
                <h3 className="text-lg text-gray-500"> Upcoming Deadlines </h3>
                <h4 className="text-xl font-bold"> 3  </h4>
            </div>

        </div>

        <div className="px-4 py-6 flex items-center shadow-lg rounded-lg hover:-translate-y-1 duration-200 border-gray-200 border bg-white">
            <div className="w-18 h-18 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>

            <div className="ml-4">
                <h3 className="text-lg text-gray-500"> Completed </h3>
                <h4 className="text-xl font-bold"> 12 </h4>
            </div>

        </div>
      </section>
  )
}
