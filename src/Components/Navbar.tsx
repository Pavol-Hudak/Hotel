import React, { useEffect } from 'react';
import '../CSS/navbar.css'
import {NavLink, redirect} from 'react-router-dom'
import Dropdown from './Dropdown'
import SignIn from './SignIn';
import { useState } from 'react';
import { stringify } from 'querystring';
import { error } from 'console';


const Navbar: React.FC = () => {
  const languages = ['English', 'Slovak', "Korean"];
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(localStorage.getItem('isAuthenticated') === 'false');
  const buttonText = isAuthenticated === true ? 'Logout' : isAuthenticated === false ? 'Sign-in' : '';


  useEffect(() => {
    console.log("aa")
    fetch('api/guest-auth')
      .then((response) => {
        if(response.ok){
          return response.json();
        }
        else{
          throw new Error('Failed to fetch')
        }
      })
      .then((data) => {
        const isAuthValue:boolean = data.is_authenticated === true;
        setIsAuthenticated(isAuthValue);
        localStorage.setItem('isAuthenticated',String(isAuthValue));

        console.log(data.is_authenticated,isAuthValue)
      })    
      .catch((error) => {
        console.error("Error",error);
      })
  },[]);
  
  const logout = async() => {
    try{
      const response = await fetch('api/logout',{
        method: 'POST',
        credentials: 'include'
      })
      if(response.ok){
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated',"false")
        window.location.href='/';
      }
      else{
        console.error("Logout failed")
      }
    }
    catch(error) {
      console.error(error);
    }
  }

  const backHome = () =>{
      window.location.href='/';
    }

    return (
      <div className='container'>
        <h1  onClick={backHome} id="title">Hotel Jožo</h1>
        <div className='navbar'>
          <div className='navbar-left'>        
              <NavLink to="/explore" className="nav-link">Explore</NavLink>     
              <NavLink to="/offers" className="nav-link">Offers</NavLink>    
              <NavLink to="/events" className="nav-link">Events</NavLink>    
              <NavLink to="/membership" className="nav-link">Membership</NavLink>    
          </div>
          <div className='navbar-right'>
              <Dropdown options={languages}/>
              { isAuthenticated ? (
                <NavLink to='/' className={'nav-link login'} onClick={logout}>{buttonText}</NavLink>
              ) : (
                <NavLink to='/signin' className={'nav-link login'} >{buttonText}</NavLink>
              )}
          </div>
        </div>
      </div>
    );  
  }
  
  export default Navbar;
  