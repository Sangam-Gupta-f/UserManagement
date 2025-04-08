import React, { useState ,useEffect} from 'react'

function ListUsers({users, deleteUser}) {
    //const[lUsers,setlUsers]=useState(users);
    
  

  return (
    <div className="p-4">
        <table className='table-auto border-collapse border border-gray-400 w-full '>
            <tr>
                <th className='border border-gray-300 px-4 py-2 '>Name</th>
                <th className='border border-gray-300 px-4 py-2 '>Email</th>
                <th className='border border-gray-300 px-4 py-2 '>Phone</th>
                <th className='border border-gray-300 px-4 py-2 '>Action</th>
            </tr>
            <tbody>
             { users.map((user)=>(
                <tr key={user.id}>
                  <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button onClick={()=>deleteUser(user.id)}className="border bg-blue-400 border-gray-300 px-4 py-2"
                      >Delete</button>
                    </td>
                  
                </tr>
             ))
              }
            </tbody>
        </table>
    </div>
  )
}

export default ListUsers