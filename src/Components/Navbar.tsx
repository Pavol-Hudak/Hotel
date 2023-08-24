import React from 'react';
import '../CSS/navbar.css'
import {NavLink} from 'react-router-dom'
import Dropdown from './Dropdown'
const Navbar: React.FC = () => {
  const languages = ['English', 'Slovak', "Korean"];
    return (
      <div className='container'>
        <h1 id="title">Hotel Jožo</h1>
        <div className='navbar'>
          <div className='navbar-left'>        
              <NavLink to="/explore" className="nav-link">Explore</NavLink>     
              <NavLink to="/offers" className="nav-link">Offers</NavLink>    
              <NavLink to="/events" className="nav-link">Events</NavLink>    
              <NavLink to="/membership" className="nav-link">Membership</NavLink>    
          </div>
          <div className='navbar-right'>
              <Dropdown options={languages}/>
              <NavLink to='/login' className={'nav-link login'}>Login</NavLink>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  