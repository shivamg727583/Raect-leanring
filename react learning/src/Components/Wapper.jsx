import React from 'react'

function Wapper(props) {
  return (
    <div className='w-[80%] mx-auto bg-red-500 rounded h-32 text-white flex items-center px-10'>
        {props.children}
    </div>
  )
}

export default Wapper