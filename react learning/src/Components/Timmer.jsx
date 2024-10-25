
import React, { useEffect, useState } from 'react'

function Timmer() {
    const [time,setTime] = useState(new Date().toLocaleTimeString());
    const [date,setDate] = useState(new Date().toLocaleDateString())
  
    useEffect(()=>{
      let interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        }, 1000);
  
    },[])
  return (
    <div className='w-full  h-screen flex items-center flex-col justify-center'>
      <h2 className='text-3xl font-semibold'>{date}</h2>
<h1 className='text-9xl font-bold '>{time}</h1>
    </div>
  )
}

export default Timmer