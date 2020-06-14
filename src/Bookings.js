import React from "react";
import Main from './App.js';
import "./App.css";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Navbar from "./navbar";
import { Component } from 'react';
import axios from 'axios';
import TableRow from './tablerow';
import TableRow1 from './tablerow1';
import TableRow2 from './tablerow2';
import "./Home.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import Cookies from 'universal-cookie';

=======
>>>>>>> 0e0f637d3ed5dc33b3c81e99e826ed767b52f536
//import { Link } from "@material-ui/core";



const style3 = {
  height: 'auto',
  width: '400px',
  padding: '1px',
  // margin: 'auto',


  // float: 'centre',
  // background: '#5BDAFF',



}

const style4 = {



};



const stylecolor = {

  background: '#BDFD9E',

};



class Bookings extends React.Component {

<<<<<<< HEAD
    isTrue = false; 

=======
>>>>>>> 0e0f637d3ed5dc33b3c81e99e826ed767b52f536

    


<<<<<<< HEAD
 constructor(props) {
      super(props);
      this.state = {flights: [], trains: [], bus: []};
     
      this.state = {
        flights: [],
        trains: [],
        bus: [],
        searchOrigin: '',
        searchDestination: '',
        redirect: false
      };
      this.onChangeSearchOrigin = this.onChangeSearchOrigin.bind(this);
      this.onChangeSearchDestination = this.onChangeSearchDestination.bind(this);
      this.searchsubmithandler = this.searchsubmithandler.bind(this);
    }
=======
>>>>>>> 0e0f637d3ed5dc33b3c81e99e826ed767b52f536

  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      trains: [],
      bus: [],
      searchOrigin: '',
      searchDestination: '',
      redirect: false
    };
    this.onChangeSearchOrigin = this.onChangeSearchOrigin.bind(this);
    this.onChangeSearchDestination = this.onChangeSearchDestination.bind(this);
    this.searchsubmithandler = this.searchsubmithandler.bind(this);
  }

  onChangeSearchOrigin(e) {
    this.setState({ searchOrigin: e.target.value });
  }
  onChangeSearchDestination(e) {
    this.setState({ searchDestination: e.target.value });
  }


  searchsubmithandler(e) {
    e.preventDefault();
    
  //  console.log("Search Submitting!!!!!!!!!!!!!!!!!!!!!!!!!");
    const obj = {
      origin: this.state.searchOrigin,
      destination: this.state.searchDestination,
    }
    alert(JSON.stringify(obj));
    //YAHA API ADD KAR !!!!!
    
    
    axios.get('http://localhost:4000/api/flight/searchflights')
      .then(response => {
        this.setState({ flights: response.data });
      })
    axios.get('http://localhost:4000/api/train/gettrains')
      .then(response => {
        this.setState({ trains: response.data });
      })
    axios.get('http://localhost:4000/api/bus/getbus')
      .then(response => {
        this.setState({ bus: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })



    fetch('http://localhost:4000/api/flight/searchflights', {
      method: 'post',
      headers: { 'Content-Type': 'application/json', 'accept': "application/json" },
      body: JSON.stringify(obj)
    })

//window.location.reload();
    // console.log(JSON.stringify(obj) + "Search submission In Progress");
    //     fetch('http://localhost:4000/api/train/newtrain', {
    //         method: 'post',
    //         headers: { 'Content-Type': 'application/json', 'accept': "application/json" },
    //         body: JSON.stringify(obj)

    //     })
  }
  //DISPLAYING THE STORED DATA IN THE CLOUD DATABASE 

  componentDidMount() {
    axios.get('http://localhost:4000/api/flight/getflights')
      .then(response => {
<<<<<<< HEAD
          this.setState({ flights: response.data });
        })
        axios.get('http://localhost:4000/api/train/gettrains')
        .then(response => {
            this.setState({ trains: response.data });
          })
          axios.get('http://localhost:4000/api/bus/getbus')
          .then(response => {
              this.setState({ bus: response.data });
            })
        .catch(function (error) {
          console.log(error);
        })

        if (global.localStorage.getItem('adminAccess') != null) {

            this.isTrue = true; 

        }

    }
=======
        this.setState({ flights: response.data });
      })
    axios.get('http://localhost:4000/api/train/gettrains')
      .then(response => {
        this.setState({ trains: response.data });
      })
    axios.get('http://localhost:4000/api/bus/getbus')
      .then(response => {
        this.setState({ bus: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
>>>>>>> 0e0f637d3ed5dc33b3c81e99e826ed767b52f536

  tabRow() {
    return this.state.flights.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  tabrow1() {
    return this.state.trains.map(function (object, i) {
      return <TableRow1 obj={object} key={i} />;
    });
  }
  tabrow2() {
    return this.state.bus.map(function (object, i) {
      return <TableRow2 obj={object} key={i} />;
    });
  }



  /*    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  */

  render() {



    const style1 = {
      background: '#EEEEEE',

<<<<<<< HEAD
        if (this.isTrue == true) {

            return (
                <>
                    <div style={style1}>
                        <Navbar />


                        <MDBContainer style={style3}>
                            <MDBRow>
                                <MDBCol>
                                    <MDBCard>
                                        <MDBCardBody>
                                            <form onSubmit={this.submit}>
                                                <p className="h4 text-center py-4">Search</p>
                                                <div style={style4}>
                                                    <MDBInput
                                                        label="search origin"
                                                        icon="user"
                                                        group
                                                        type="text"
                                                        validate
                                                        error="wrong"
                                                        success="right"
                                                        value={this.state.searchOrigin}
                                                        onChange={this.onChangeSearchOrigin}
                                                    />
                                                    <MDBInput
                                                        label="search destination"
                                                        icon="user"
                                                        group
                                                        type="text"
                                                        validate
                                                        error="wrong"
                                                        success="right"
                                                        value={this.state.searchDestination}
                                                        onChange={this.onChangeSearchDestination}
                                                    />

                                                </div>

                                                <div className="text-center py-4 mt-3">


                                                    <MDBBtn color="cyan" type="submit" onClick={this.searchsubmithandler} style={stylecolor}>
                                                        Submit
                   </MDBBtn>{/*<div>  
                  <a href="Login" style={{color: "black"}}>Already a member? Sign In</a>
                  </div> */}



                                                </div>
                                            </form>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>




                        <div>
                            <h3 align="center">Flights Available</h3>
                            <table className="table table-striped" style={{ marginTop: 20 }}>
                                <thead>
                                    <tr>
                                        <th>Flight No</th>
                                        <th>Airline</th>
                                        <th>Departure Date</th>
                                        <th>Arrival Date</th>
                                        <th>Origin</th>
                                        <th>Destination</th>
                                        <th>Price</th>
                                        <th colSpan="2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.tabRow()}
                                </tbody>
                            </table>

                            <Link to="Schedule">
                                <button className="btn btn-primary">Add</button>
                            </Link>
                        </div>
                        <div>
                            <h3 align="center">Trains Available</h3>
                            <table className="table table-striped" style={{ marginTop: 20 }}>
                                <thead>
                                    <tr>
                                        <th>Train No</th>
                                        <th>Station</th>
                                        <th>Train Name</th>
                                        <th>Departure Date</th>
                                        <th>Arrival Date</th>
                                        <th>Origin</th>
                                        <th>Destination</th>
                                        <th>Price</th>
                                        <th colSpan="2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.tabrow1()}
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h3 align="center">Bus Available</h3>
                            <table className="table table-striped" style={{ marginTop: 20 }}>
                                <thead>
                                    <tr>
                                        <th>Bus No</th>
                                        <th>Station</th>
                                        <th>Bus Name</th>
                                        <th>Departure Date</th>
                                        <th>Arrival Date</th>
                                        <th>Origin</th>
                                        <th>Destination</th>
                                        <th>Price</th>
                                        <th colSpan="2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.tabrow2()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            );
        }
        else {


            return (
                <>
                    <div style={style1}>
                        <Navbar />
                        <div>
                            <h3 align="center">Flights Available</h3>
                            <table className="table table-striped" style={{ marginTop: 20 }}>
                                <thead>
                                    <tr>
                                        <th>Flight No</th>
                                        <th>Airline</th>
                                        <th>Departure Date</th>
                                        <th>Arrival Date</th>
                                        <th>Origin</th>
                                        <th>Destination</th>
                                        <th>Price</th>
                                        <th colSpan="2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.tabRow()}
                                </tbody>
                            </table>

                            
                        </div>
                        <div>
                            <h3 align="center">Trains Available</h3>
                            <table className="table table-striped" style={{ marginTop: 20 }}>
                                <thead>
                                    <tr>
                                        <th>Train No</th>
                                        <th>Station</th>
                                        <th>Train Name</th>
                                        <th>Departure Date</th>
                                        <th>Arrival Date</th>
                                        <th>Origin</th>
                                        <th>Destination</th>
                                        <th>Price</th>
                                        <th colSpan="2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.tabrow1()}
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h3 align="center">Bus Available</h3>
                            <table className="table table-striped" style={{ marginTop: 20 }}>
                                <thead>
                                    <tr>
                                        <th>Bus No</th>
                                        <th>Station</th>
                                        <th>Bus Name</th>
                                        <th>Departure Date</th>
                                        <th>Arrival Date</th>
                                        <th>Origin</th>
                                        <th>Destination</th>
                                        <th>Price</th>
                                        <th colSpan="2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.tabrow2()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            );


        }
=======
    };
>>>>>>> 0e0f637d3ed5dc33b3c81e99e826ed767b52f536



    return (
      <>
        <div style={style1}>
          <Navbar />


          <div>
<<<<<<< HEAD
          
                
=======

            <MDBContainer style={style3}>
              <MDBRow>
                <MDBCol>
                  <MDBCard>
                    <MDBCardBody>
                      <form onSubmit={this.submit}>
                        <p className="h4 text-center py-4">Search</p>
                        <div style={style4}>
                          <MDBInput
                            label="search origin"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            value={this.state.searchOrigin}
                            onChange={this.onChangeSearchOrigin}
                          />
                          <MDBInput
                            label="search destination"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            value={this.state.searchDestination}
                            onChange={this.onChangeSearchDestination}
                          />

                        </div>

                        <div className="text-center py-4 mt-3">


                          <MDBBtn color="cyan" type="submit" onClick={
                            this.searchsubmithandler} style={stylecolor}>
                            Submit
                   </MDBBtn>{/*<div>  
                  <a href="Login" style={{color: "black"}}>Already a member? Sign In</a>
                  </div> */}



                        </div>
                      </form>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
>>>>>>> 0e0f637d3ed5dc33b3c81e99e826ed767b52f536


          </div>

          <div>
            <h3 align="center">Flights Available</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Flight No</th>
                  <th>Airline</th>
                  <th>Departure Date</th>
                  <th>Arrival Date</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Price</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
            <Link to="Schedule">
              <button className="btn btn-primary">Add</button>
            </Link>
<<<<<<< HEAD
        </div>
        <div>
          <h3 align="center">Trains Available</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Train No</th>
                 <th>Station</th>
                <th>Train Name</th>
                <th>Departure Date</th>
                <th>Arrival Date</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Price</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabrow1() }
            </tbody>
          </table>
        </div>
        
        <div>
          <h3 align="center">Bus Available</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Bus No</th>
                 <th>Station</th>
                <th>Bus Name</th>
                <th>Departure Date</th>
                <th>Arrival Date</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Price</th>
               <th colSpan="2">Action</th> 
              </tr>
            </thead>
            <tbody>
              { this.tabrow2() }
            </tbody>
          </table>
                  </div>

























              </div>








          </>


         





      );
    }
=======
          </div>
          <div>
            <h3 align="center">Trains Available</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Train No</th>
                  <th>Station</th>
                  <th>Train Name</th>
                  <th>Departure Date</th>
                  <th>Arrival Date</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Price</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.tabrow1()}
              </tbody>
            </table>
          </div>
>>>>>>> 0e0f637d3ed5dc33b3c81e99e826ed767b52f536

          <div>
            <h3 align="center">Bus Available</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Bus No</th>
                  <th>Station</th>
                  <th>Bus Name</th>
                  <th>Departure Date</th>
                  <th>Arrival Date</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Price</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.tabrow2()}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }

}


export default Bookings;
