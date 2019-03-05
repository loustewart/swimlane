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
              <br/>
              <br/>
              <br/>
              <br/>

              <ul>
                <li className="navLink">
                  <Link to="/bookings/new">Add new booking</Link>
                </li>
                <li className="navLink">
                  <Link to="/lessons/new">Add new lesson</Link>
                </li>
                <li className="navLink">
                  <Link to="/customers/new">Add new customers</Link>
                </li>
              </ul>

        </div>
    </header>
  )
}

export default NavBar;
