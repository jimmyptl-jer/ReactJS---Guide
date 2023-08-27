import React, { useState } from 'react'
import Input from './componets/Input'
import UserList from './componets/UserList';

const App = () => {

  const [userData,setUserData] = useState([]);

  const addUserData = (uName,uAge) =>{
    setUserData((prevData)=>{
      return [...prevData,{uName,uAge,id:Math.random()}]
    })

    console.log(userData)
  }
  
  return (
    <div>
      <Input onAddUser={addUserData}/>
      <UserList users={userData}></UserList>
    </div>
  )
}

export default App