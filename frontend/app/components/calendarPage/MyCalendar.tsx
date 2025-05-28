'use client'
import React from 'react'
import { useState } from 'react';
export default function MyCalendar() {

  const today = new Date()

  const [thisMonthIndex, setThisMonthIndex] = useState<number>(today.getMonth());

  const [thisYear, setThisYear] = useState<number>(today.getFullYear())


  const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const thisMonth = months[thisMonthIndex]
  console.log(thisMonth)

  const days = [29,30,31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2]

  const changeMonth = (direction:string) =>{
    switch (direction){
        case "forward":
            if (thisMonthIndex + 1 > 11){
                setThisMonthIndex(0)
                setThisYear(thisYear+1)
            } else {
                setThisMonthIndex(thisMonthIndex+1)
            }
            break
        case "back":
            if (thisMonthIndex - 1 < 0){
                setThisMonthIndex(11)
                setThisYear(thisYear-1)
            } else {
                setThisMonthIndex(thisMonthIndex-1)
            }
            break
        
    }
  }
  return (
    <section className='bg-white mt-5 p-5 rounded-lg shadow-md border border-gray-200'>
        <div className='flex'>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg mr-1" onClick={() => {changeMonth("back")}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>

            <h2 className='text-2xl font-bold mx-4 w-[200px] text-center'> {thisMonth} {thisYear} </h2>
            
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg mx-4" onClick={() =>{changeMonth("forward")}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
        
        <section className='mt-7'>
            <div className="grid grid-cols-7">
                <h1 className='text-center'> Sun </h1>
                <h1 className='text-center'> Mon</h1>
                <h1 className='text-center'> Tue </h1>
                <h1 className='text-center'> Wed </h1>
                <h1 className='text-center'> Thu </h1>
                <h1 className='text-center'> Fri </h1>
                <h1 className='text-center'> Sat </h1>

                {days.map((day, index) => (
                    <div className='border border-gray-300 m-2 p-3 rounded-lg shadow-md' key={index}>
                    <h2> {day} </h2>
                    <div className='h-[77px]'>
                        <p className='text-sm my-2 border p-2 rounded-lg border-gray-200'> Present </p>
                        <p className='text-sm my-2 border p-2 rounded-lg border-gray-200'> Meeting </p>
                        
                    </div>

                    <div className='flex justify-center items-center mt-7'>
                        <div className='w-[8px] h-[8px] rounded-[100%] bg-red-500'></div>
                    </div>
                </div>
                ))}

                 

                
                
            </div>
        </section>
        
    </section>
  )
}
