import React from "react";
import "./App.css";
import Navbar from "./navbar";
import { Component } from 'react';
import axios from 'axios';
import TableRow from './tablerow';
import TableRow1 from './tablerow1';
import TableRow2 from './tablerow2';
import "./Home.css";
import {Link} from "react-router-dom";
//import { Link } from "@material-ui/core";

class Bookings extends React.Component {

    



 constructor(props) {
      super(props);
      this.state = {flights: [], trains: [], bus: []};
     
      
    }
    
    //DISPLAYING THE STORED DATA IN THE CLOUD DATABASE 

    componentDidMount(){
      axios.get('http://localhost:4000/api/flight/getflights')
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
    }

    tabRow(){
      return this.state.flights.map(function(object, i){
          return <TableRow  obj={object} key={i} />;
      });
    }
    tabrow1(){
      return this.state.trains.map(function(object, i){
          return <TableRow1 obj={object} key={i} />;
      });
    }
      tabrow2(){
        return this.state.bus.map(function(object, i){
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

        };



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
              { this.tabRow() }
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

  }
     

export default Bookings;
