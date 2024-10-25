import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[88vh]  flex items-center relative '>
        <div className="left w-[40%] bg-black h-full ">
        </div>
        <div className="heading w-fit h-fit flex flex-col absolute bottom-[10%] left-20 z-10 text-white">
            <h1 className='text-6xl font-medium uppercase'>My Name is </h1>
            <h1 className='text-8xl font-bold uppercase'>Abdulraman</h1>
            <button className='px-6 py-2 bg-yellow-400 uppercase text-black w-fit text-6xl font-semibold'>i'm ui developer</button>
        </div>
        <div className="w-[60%] h-full flex items-center justify-center ">
        <img  className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRhcmslMjB3aGl0ZSUyMHBob3RvfGVufDB8fDB8fHww" alt="" />
            
        </div>

    </div>
  )
}

export default Hero