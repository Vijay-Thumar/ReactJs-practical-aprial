import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import User from './User';

function Users(props) {
  const [datausers, setUsers] = useState([]);
  const [foundUser, setFoundUser] = useState(false);
  const [foundusername, setfoundusername] = useState('');
  // let users = []

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
        dispatch({ type: 'storeuser', payload: res.data})
      })
  }, [])

  const onSearchHandler = (event) => {
    // console.log( event.target.value)
    const userName = event.target.value;
    const serchedUser = datausers.filter(datausers => datausers.name.includes(userName))
    console.log('found: ',serchedUser);
    setfoundusername(serchedUser);
    setFoundUser(!foundUser);

  }
  return (
    <div>
      
      <input type='text' onChange={onSearchHandler}/>

      {!foundUser ? 
        <div>
          {
            datausers.map((item) => {
              return <User key={item.id} username={item.name} email={item.email} />
            })
          }
        </div>

      :
      <div>
          <span>{JSON.stringify(foundusername)}</span>
      </div>
      }

      
    </div>
  )
}

export default Users