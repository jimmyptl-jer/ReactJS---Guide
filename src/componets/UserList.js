import React from 'react'
import Card from './Card'

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) =>(
          <li key={user.id}>
            {user.uName} {user.uAge}
            </li>
        ))}
      </ul>
    </Card>
  )
}

export default UserList