
import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = (props) => {
  return (
  props.user ?
  <div className="d-flex flex-column align-items-start ml-4 mt-4">
    <div className="my-2">
    WELCOME, {props.user.name}
    </div>
    <div className="my-2">
    <Link to='/profiles' className='NavBar-link'>Profile</Link>
    </div>
    <div className="my-2">
    <Link to='/editProfiles' className='NavBar-link'>Edit Profile</Link>
    </div>
    <div className="my-2">
    <Link to='/createEvent' className='CreateEvent'>Create Event</Link>
    </div>
    <div className="my-2">
    <Link to='/events' className='MyEvents'>Events</Link>
    </div>
    <div className="my-2">
    <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
    </div>
  </div>
  :
  <div className="d-flex flex-column align-items-start ml-5 mt-4">
    <div className="my-2"> 
    <Link to='/login' className='NavBar-link'>Log in</Link>
    </div>
    <div className="my-2">
    <Link to='/signup' className='NavBar-link'>Sign up</Link>
    </div>
  </div>
  )
};

export default NavBar;