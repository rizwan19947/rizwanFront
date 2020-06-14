import React from "react";
import '../node_modules/bootstrap-css-only';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from 'axios';
import Navbar from './navbar';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
const Cookie = new Cookies();





export default class Comparision extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      redirerct: false
    }
    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.submit = this.submit.bind(this);
  }
  onChangeFname(e) {
    this.setState({ fname: e.target.value });
  }
  onChangeLname(e) {
    this.setState({ lname: e.target.value });
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
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://localhost:4000/api/user/register', obj).then(res => {
      this.setState({ redirect: true });
      window.location.reload();
      alert('Signup Successful!')
    });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={'login'} />;
    }
    return (
      <div>
        <Navbar />
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <MDBCard>
                <MDBCardBody>
                  <form onSubmit={this.submit}>
                    <p className="h4 text-center py-4">Sign up</p>
                    <div className="grey-text">
                      <MDBInput
                        label="First name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value={this.state.fname}
                        onChange={this.onChangeFname}
                      />
                      <MDBInput
                        label="Last Name"
                        icon="envelope"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value={this.state.lname}
                        onChange={this.onChangeLname}
                      />
                      <MDBInput
                        label="Email"
                        icon="exclamation-triangle"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                      />
                      <MDBInput
                        label="Password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        value={this.state.password}
                        onChange={this.onChangePassword}
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn color="cyan" type="submit">
                        Register
                  </MDBBtn><div>
                        <a href="Login" style={{ color: "black" }}>Already a member? Sign In</a>
                      </div>

                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  };
}