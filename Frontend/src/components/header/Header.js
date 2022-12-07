import React from 'react';
import { Link } from 'react-router-dom';

function Header({isAuthenticated, setIsAuthenticated}) {
	return (
		<header id="header">
			<nav id="nav" className="navbar navbar-expand-md navbar-dark  sticky-top">
        <div className="collapse navbar-collapse">Your TO-DO </div>
        
        <ul className="navbar-nav left-content-end container">
          <li  id ="navbar" className=".navbar-brand"><Link to='/'>Home</Link></li>
          
          {isAuthenticated && <li  id ="navbar" className="navbar navbar-expand-sm navbar-custom"><Link to='/todo'>View Todo</Link></li>}
          {isAuthenticated && <li id ="navbar" className="nav-link px-4"><Link to='/add'>Add Todo</Link></li>}
          {!isAuthenticated && <li id ="navbar" className="navbar navbar-expand-sm navbar-custom"><Link to='/signin'>Signin</Link></li>}
          {!isAuthenticated && <li id ="navbar"  className="nav-link px-4"><Link to='/signup'>Signup</Link></li>}
          {isAuthenticated && <li id ="navbar" className="nav-link px-4"><Link to='/signout'>Signout</Link></li>}
          <li id ="navbar" className="nav-link px-4"><Link to='/about'>About</Link></li>
        </ul>
      </nav>
		</header>
	)
}

export default Header;