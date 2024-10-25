import React from 'react'

function Navbar() {
  return (
   <nav className='w-full h-[87px] bg-black text-white flex items-center justify-between  '>
    <h1 className='font-semibold text-3xl pl-20   capitalize'>PROTOFILO.</h1>
    <div className="link flex items-center justify-around w-[60%] bg-zinc-700 h-full px-8">
        <a href="#" className='text-lg font-normal'>Home</a>
        <a href="" className='text-lg font-normal'>About</a>
        <a href="" className='text-lg font-normal'>Words</a>
        <a href="" className='text-lg font-normal'>Blogs</a>
        <a href="" className='text-lg font-normal'>Contact</a>
    </div>
   </nav>
  )
}

export default Navbar