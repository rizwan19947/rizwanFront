import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
} from "mdbreact";
import '../node_modules/bootstrap-css-only';
import Navbar from './navbar';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Link } from "react-router-dom";
//const Cookie = new Cookies();

export default class Login extends React.Component {
    isTrue = false; 
    result = 0;
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
        
        console.log("signing in");
        this.result = fetch('http://localhost:4000/api/user/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'accept': "application/json" },
            body: JSON.stringify(obj)

        });

        if (this.result = "Accepted") {
            alert('Login Successful!');
            global.localStorage.setItem('adminAccess', 'true');
            window.location.reload();
        }
        else {
            alert('Login Unsuccessful!');
            window.location.reload();
        }

        

        

 /*       axios.post('http://localhost:3000/api/user/login', obj).then(res => {
            this.setState({ redirect: true });
            localStorage.setItem('Token', JSON.stringify(res.data));
            window.location.reload("Booking");
            alert('Logged in Successfully')
        }).catch(alert('Invalid Email or Password. Enter Correct Credentials'));
    */   }



    render() {

        if (global.localStorage.getItem('adminAccess') != null) {
            this.isTrue = true; 
        }



        if (this.isTrue == true) {
            return <Redirect to={'Bookings'} />;
        }

        else {

            return (<>
                <Navbar />

                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardHeader className="form-header deep-blue-gradient rounded">
                                        <h3 className="my-3">
                                            <MDBIcon icon="lock" /> Login:
                </h3>
                                    </MDBCardHeader>
                                    <form onSubmit={this.submit} >
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Type your email"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.email}
                                                onChange={this.onChangeEmail}
                                            />
                                            <MDBInput
                                                label="Type your password"
                                                icon="lock"
                                                group
                                                type="password"
                                                value={this.state.password}
                                                onChange={this.onChangePassword}
                                                validate
                                            />
                                        </div>

                                        <div className="text-center mt-4">
                                            <MDBBtn
                                                color="light-blue"
                                                className="mb-3"
                                                type="submit"
                                                onClick={() =>
                                                    this.submit(this.state)}
                                            >
                                                Login
                </MDBBtn>
                                        </div>
                                    </form>
                                    <MDBModalFooter>
                                        <div className="font-weight-light">
                                            <a href="Comparision" style={{ color: "black" }}>Not a member? Sign Up</a>
                                            {/* <p>Forgot Password?</p> */}
                                        </div>
                                    </MDBModalFooter>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>    </>
            );


        }


    };
}


