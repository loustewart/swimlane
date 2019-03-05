import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  return (
    <header>
    <div className="navigation-bar">
          <img className="logo" alt=""/>
          <a href="/" className="title">SwimLane</a>
            <br/>
              <ul>
                <li className="navLink">
                  <Link to="/bookings">Bookings</Link>
                </li>
                <li className="navLink">
                  <Link to="/lessons">Lessons</Link>
                </li>
                <li className="navLink">
                  <Link to="/customers">Customers</Link>
                </li>
              </ul>
        </div>
    </header>
  )
}

export default NavBar;
