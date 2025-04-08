import React, { useState } from 'react'

function AddUsers({add}) {
  const [user,setUser]=useState({name:'', email:'', phone:''})
  
  const handleChange=(e)=>{
       const {name,value}=e.target;
       setUser({...user, [name]:value});
  }
  
  const submitForm=(e)=>{
    e.preventDefault();
    console.log(user);
    add(user);
    setUser({name:'', email:'', phone:''});
  }
  
  
  return (
    <div>
        <form onSubmit={submitForm} className='max-w-md mx-auto p-4 bg-white rounded shadow-md space-y-4'>
            <div className='flex flex-col gap-1'>
            <label htmlFor='name' className="font-semibold">Enter Name</label>
            <input className="border border-black-300 rounded p-2" type='text'
             name='name' 
             placeholder='Name'
             value={user.name}
             onChange={handleChange}
             >
             </input>
            </div>
            <div className='flex flex-col gap-1'>
            <label htmlFor='email' className="font-semibold">Enter Email</label>
            <input className="border border-black-300 rounded p-2" 
            type='text'
             name='email' 
             placeholder='Email'
             value={user.email}
             onChange={handleChange}
             ></input>
            </div>
            <div className='flex flex-col gap-1'>
            <label htmlFor='phone' className="font-semibold">Enter Phone</label>
            <input className="border border-black-300 rounded p-2" 
            type='number' 
            name='phone'
             placeholder='Phone'
             value={user.phone}
             onChange={handleChange}
             ></input>
            </div>
            <div className='flex flex-col gap-2.5'>
            
            <button className="bg-blue-500 rounded text-white p-2 hover:bg-blue-600" type='submit' >Add User</button>
            </div>
            
        </form>
    </div>
  )
}

export default AddUsers