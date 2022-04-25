import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


function Header(props) {

    const allusers = useSelector(state => state.users);
    console.log('users from redux', allusers);
    let active = 0;

  return (
    <div>
        <nav>
            <span> active user : {allusers.length} </span>
            <ul>
                  <li>
                      <Link to='/home'>Home</Link>
                  </li>
                  <li>
                      <Link to='/users'>Users</Link>
                  </li>
                  <li>
                      <Link to='/post'>post</Link>
                  </li>
                  <li>

                  </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header