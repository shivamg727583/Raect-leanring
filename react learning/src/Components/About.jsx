import React, { useEffect, useState } from 'react'
import axios from './Axios/Axios'

function About() {
const [users,setUsers]= useState([])

  const getUsers = ()=>{

    axios.get("/users").then((res)=>{
      setUsers(res.data)
      // console.log(res.data);
    }).catch((err)=>console.log(err))
  }

  useEffect(()=>{
    console.log("user mounted / created ")
    getUsers();
    return ()=>{
      console.log("users unmounted / destroyed")
      setUsers(null);
    }

  },[])

  console.log("userd rendered")

  return (
    <div>
      <h1>About users</h1>
      <button onClick={getUsers} className='px-4 py-3 rounded bg-red-300 my-4'>Get Users</button>

<div className="w-full p-4 rounded bg-zinc-100">

  {users && users.map((user)=>
  <div className='p-2 bg-zinc-200 rounded my-2'>
<h4>Email :{user.email} </h4>
<h4>Name :{user.name.firstname} </h4>

    </div>
  
  )}

</div>

    </div>
  )
}

export default About