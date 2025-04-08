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
    <div className='flex justify-center '>
      <AddUsers add={add}/>
        <ListUsers users={users} deleteUser={deleteUser}/>
    </div>
  )
}

export default App
