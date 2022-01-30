import React from 'react';
import "./css/Navbar.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function NavBar() {
  return (
    <div className='navbar'>
        <div className='logo'><img src="/logo_main.png"></img></div>
        <ul className='nav_menu'>
            <li>Courses <ArrowDropDownIcon className='dropdown'/></li>
            <li>Courses <ArrowDropDownIcon className='dropdown'/></li>
            <li>Courses <ArrowDropDownIcon className='dropdown'/></li>
            <li>Courses <ArrowDropDownIcon className='dropdown'/></li>
        </ul>
        <button className='login'>Login</button>
    </div>
  )
}

export default NavBar;
