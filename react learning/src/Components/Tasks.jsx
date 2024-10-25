import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Tasks() {
  return (
    <div >
        <h1 className='text-xl font-bold'>Tasks</h1>
        <ul className='flex flex-col '>
          
        <Link to='/task/1' >Task 1</Link> 
         <Link to='/task/2' >Task 2</Link>
        <Link to='/task/3' >Task 3</Link>
        <Link to='/task/4' >Task 4</Link>
        <Link to='/task/5' >Task 5</Link>
        </ul>

        <hr className='mt-10 h-1 bg-black' />
        <div className='flex flex-col'>
            <Outlet />
        </div>
    </div>
  )
}

export default Tasks