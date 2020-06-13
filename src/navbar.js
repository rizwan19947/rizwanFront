import React from 'react'
import Main from './App.js';
import logo from "./Akays Travel Logo.png";
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import "./Home.css";
import Cookies from 'universal-cookie';
const Cookie = new Cookies();






export default class Login extends React.Component{
    isTrue = false;


    
    
    logout() {
        global.localStorage.removeItem('adminAccess');
    }


    

    render() {
        if (global.localStorage.getItem('adminAccess') != null) {
            this.isTrue = true;
        }

        if (this.isTrue == true) {


            //if (localStorage.getItem('Token') != null) {
            //  alert((localStorage.getItem('Token')) + 'HELLO');




            return (
                <div>
                    <nav>
                        <Link to="Home" >
                            <img src={logo} className="logo" alt="logo" />
                        </Link>
                        <Link className="a" style={{ float: 'right' }} onClick={this.logout()} >Logout</Link>
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

        else {


            return (

                <div>
                    <nav>
                        <Link to="Home" >
                            <img src={logo} alt="logo" />
                        </Link>
                        <a href="Login" className="a" style={{ float: 'right' }}>Login/Signup</a>
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
                                <a href="Admin-exclusive Bookings"> AdminBookings</a>
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

}