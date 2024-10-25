import React, { useState } from 'react'

export default function Form() {
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [city,setCity] = useState('Delhi');
const [gender,setGender] = useState('')


    const SubmitHandler = (e)=>{
        e.preventDefault()
      
       console.log("Name : ",name,"\n Email: ",email)
       console.log("City : ",city)
       console.log("Gender : ",gender)
       setEmail('')
       setName('')
       setCity('')
       setGender('')
    }
  return (
    <div>
        <form onSubmit={SubmitHandler} className='w-[300px] flex flex-col gap-4 border-2 border-zinc-400 rounded-xl p-3'>
           
            <input onChange={(e)=>setName(e.target.value)} type="text" name="name"  placeholder='Enter username' className='px-3 py-2 rounded-lg border'  value={name}/>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="" placeholder='Enter email' className='px-3 py-2 rounded-lg border' value={email}/>

            <select  value={city} onChange={(e)=>setCity(e.target.value)} >
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="chennai">Chennai</option>
              <option value="bhopal">Bhopal</option>
            </select>

<input type="radio" name="gender" defaultValue='Male' checked={gender === 'Male'?true:false
}  onChange={(e)=>setGender(e.target.value)} /> Male

<input type="radio" name="gender" defaultValue='Female' checked={gender === 'Female'?true:false}  onChange={(e)=>setGender(e.target.value)} /> Female


            <input type="submit" value="Submit"  className='p-3 rounded-xl bg-blue-600 font-bold text-xl text-white'/>
        </form>
    </div>
  )
}
