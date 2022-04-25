import React from 'react'

function User(props) {
  return (
    <div>
          <label>User name: </label>
          <span><i>{props.username}</i></span><br />
          
          <label>Email: </label>
          <span><i>{props.email}</i></span><br /> 
    </div>
  )
}

export default User