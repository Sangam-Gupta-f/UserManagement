import { useState } from 'react'
import './App.css'
import ListUsers from './components/listUsers'
import AddUsers from './components/addUsers'


function App() {
 const [users, setUsers]=useState([]);

 const deleteUser=(id)=>{
  const newUsers=users.filter(user => user.id !=id)
  setUsers(newUsers);
}

 const add=(user)=>{
    setUsers([...users,{...user, id:Date.now() } ])
 };

  return (
    <div  >
     <div className='p-5 m-5'>
          <h1 className='font-bold text-4xl'>User Management System</h1>
      </div>
    <div className='flex justify-center '>
     
      <AddUsers add={add}/>
        <ListUsers users={users} deleteUser={deleteUser}/>
    </div>
    </div>
  )
}

export default App
