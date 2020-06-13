import React from "react";
import axios from 'axios';
import Navbar from './navbar';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";
const Cookie = new Cookies();





export default class Login1 extends React.Component {


    isTrue = false; 

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirerct: false
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.submit = this.submit.bind(this);
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value });
    }
    submit(e) {
        e.preventDefault();
        const obj = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:4000/api/user/login', obj).then(res => {
            this.setState({ redirect: true });

            
            global.localStorage.setItem('adminAccess', 'true');
            

            //localStorage.setItem('Token', JSON.stringify(res.data));
            window.location.reload();
            alert('Logged in Successfully')
        }).catch(alert('Invalid Email or Password. Enter Correct Credentials'));


        if (localStorage.getItem('adminAccess') != null) {
            this.isTrue = true; 
        }

    }
    render() {




        if (this.isTrue == true) {
            return <Redirect to={'home'} />;
        }
        else {
            return (
                <div>
                    <Navbar />
                    <form onSubmit={this.submit}>
                        <input type="text" value={this.state.email} onChange={this.onChangeEmail} />
                        <input type="password" value={this.state.password} onChange={this.onChangePassword} />
                        <input type="submit" value='login' className='btn' />
                        <Link to={'/Comparision'}>Signup</Link>
                    </form>
                </div>
            );
        }

    }







}