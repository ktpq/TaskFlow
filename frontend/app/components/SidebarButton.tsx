import React from 'react'

interface props {
    open:boolean
    setOpen:() => void;
    src:string
    title:string
}

export default function SidebarButton({open, setOpen, title, src}:props) {
  return (
    <button className={`text-white text-xl py-3 rounded-r-lg hover:bg-white/20 duration-300 flex items-center relative ${open ? 'bg-white/30': null}`} onClick={setOpen}>
        {open ? (
            <span className='absolute h-full w-[6px] rounded-l-2xl bg-white duration-300 transition-[width] overflow-hidden left-0 top-0'></span>
        ): (
            <span className='absolute h-full w-[0px] rounded-l-2xl bg-white duration-300 transition-[width] overflow-hidden left-0 top-0'></span>
        )}
        <img src={src} alt="" className='ml-6' width={33}/>
        <h1 className='mx-4'> {title} </h1>
    </button>
  )
}
