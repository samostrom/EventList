
import React from 'react';
import { Link } from 'react-router-dom';
import profileService from '../../utils/profileService';
import './NavBar.css';

const NavBar = (props) => {
  let nav  = props.user ?
  <div>
    <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <Link to='/profiles' className='NavBar-link'>Profile</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <Link to='/editProfiles' className='NavBar-link'>Edit Profile</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <Link to='/createEvent' className='CreateEvent'>Create Event</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <Link to='' className='NavBar-link' onClick={props.handleLogout}>Log Out</Link>
    
  </div>
  :
  <div>
    <Link to='/login' className='NavBar-link'>Log in</Link>
    &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
  </div>
  
  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;