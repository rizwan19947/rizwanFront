import React from 'react'
import logo from "./Akays Travel Logo.png";
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./Home.css";
import Cookies from 'universal-cookie';
const Cookie = new Cookies();

export default class Login extends React.Component{





    deleteToken() {


        localStorage.removeItem('Token');

    }

    render() {


        if (localStorage.getItem('Token') != null) {
            alert((localStorage.getItem('Token')) + 'HELLO');




    return (
      <div>
      <nav>
          <Link to="Home" >
                    <img src={logo} className="logo" alt="logo" />
                </Link>
                <Link className="a" style={{ float: 'right' }} onClick={this.deleteToken()} >Logout</Link>
        </nav>
        <nav1>
          <ul1>
            <li>
              <Link to="Home"> Home</Link>
            </li>
            <li>
              <a href="Schedule"> Bookings</a>
            </li>
                    <li>
                        <a href="Bookings" > Schedule</a>
            </li>
            <li>
              <a href="Services"> Services</a>
            </li>
            
           
            <li>
              <a href="Aboutus"> About Us</a>
            </li>
            <li>
              <a href="Comparision"> </a>
            </li>
          </ul1>
        </nav1>
</div>
  )
}
  
  return (
     
        <div>
        <nav>
            <Link to="Home" >
              <img src={logo} alt="logo" />
            </Link>
                <a href="Login" className="a" style={{float: 'right'}}>Login/Signup</a>
          </nav>
          <nav1>
            <ul1>
              <li>
                <Link to="Home"> Home</Link>
              </li>
              <li>
                <a href="Schedule"> Bookings</a>
              </li>
              <li>
                <a href="Bookings"> Schedule</a>
              </li>
              <li>
                <a href="Services"> Services</a>
              </li>
              
              <li>
                <a href="Aboutus"> About Us</a>
              </li>
              <li>
                <a href="Comparision"> </a>
              </li>
            </ul1>
          </nav1>
  </div>
    )
}

}