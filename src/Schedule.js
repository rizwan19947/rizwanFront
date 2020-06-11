import React from "react";
import image1 from './plane.jpg';
import '../node_modules/bootstrap-css-only';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import axios from 'axios';
import Navbar from './navbar';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import shadows from "@material-ui/core/styles/shadows";
import color from "@material-ui/core/colors/teal";
const Cookie = new Cookies();


const style = {
    height: '1380px',
    width: '500px',
    padding: '20px',
    margin: '1px',
    float: 'left',
    background: '#5BDAFF',


}

const style1 = {
    height: '1380px',
    width: '500px',
    padding: '20px',
    margin: '1px',
    float: 'right',
    background: '#5BDAFF',



}

const style2 = {
    height: '1380px',
    width: '500px',
    padding: '20px',
    margin: '0 auto',
    float: 'none',
    background: '#5BDAFF',



}



const stylecolor = {

    background: '#BDFD9E',

};


const gray = {

    background: '#9E9E9E',

};
export default class Schedule extends React.Component {


    constructor(props) {

        super(props);
        this.state = {
            trainNo: '',
            station: '',
            TrainName: '',
            departureDate: '',
            arrivalDate: '',
            departureTime: '',
            arrivalTime: '',
            duration: '',
            origin: '',
            destination: '',
            classes: '',
            noOfSeats: '',
            price: '',
            redirerct: false
        }
        this.onChangetrainNo = this.onChangetrainNo.bind(this);
        this.onChangestation = this.onChangestation.bind(this);
        this.onChangeTrainName = this.onChangeTrainName.bind(this);
        this.onChangedepartureDate = this.onChangedepartureDate.bind(this);
        this.onChangearrivalDate = this.onChangearrivalDate.bind(this);
        this.onChangedepartureTime = this.onChangedepartureTime.bind(this);
        this.onChangearrivalTime = this.onChangearrivalTime.bind(this);
        this.onChangeduration = this.onChangeduration.bind(this);
        this.onChangeorigin = this.onChangeorigin.bind(this);
        this.onChangedestination = this.onChangedestination.bind(this);
        this.onChangeclasses = this.onChangeclasses.bind(this);
        this.onChangenoOfSeats = this.onChangenoOfSeats.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
        this.submit = this.submit.bind(this);
    }
    onChangetrainNo(e) {
        this.setState({ trainNo: e.target.value });
    }
    onChangestation(e) {
        this.setState({ station: e.target.value });
    }
    onChangeTrainName(e) {
        this.setState({ TrainName: e.target.value });
    }
    onChangedepartureDate(e) {
        this.setState({ departureDate: e.target.value });
    }
    onChangearrivalDate(e) {
        this.setState({ arrivalDate: e.target.value });
    }

    onChangedepartureTime(e) {
        this.setState({ departureTime: e.target.value });
    }
    onChangearrivalTime(e) {
        this.setState({ arrivalTime: e.target.value });
    }
    onChangeduration(e) {
        this.setState({ duration: e.target.value });
    }
    onChangeorigin(e) {
        this.setState({ origin: e.target.value });
    }

    onChangedestination(e) {
        this.setState({ destination: e.target.value });
    }
    onChangeclasses(e) {
        this.setState({ classes: e.target.value });
    }
    onChangenoOfSeats(e) {
        this.setState({ noOfSeats: e.target.value });
    }

    onChangeprice(e) {
        this.setState({ price: e.target.value });
    }
    submit(e) {
        e.preventDefault();
        const obj = {
            trainNo: this.state.trainNo,
            station: this.state.station,
            TrainName: this.state.TrainName,
            departureDate: this.state.departureDate,
            arrivalDate: this.state.arrivalDate,
            departureTime: this.state.departureTime,
            duration: this.state.duration,
            origin: this.state.origin,
            destination: this.state.destination,
            classes: this.state.classes,
            noOfSeats: this.state.noOfSeats,
            price: this.state.price,

        }
        axios.post('http://localhost:4000/api/train/newtrain', obj).then(res => { this.setState({ redirect: true }) });
    }


    render() {


        if (this.state.redirect) {
            return <Redirect to={'Bookings'} />;
        }
        return (
            <div >


                <Navbar />
                <MDBContainer style={style}>
                    <MDBRow>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.submit}>
                                        <p className="h4 text-center py-4">Add Train</p>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="TrainNo"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.trainNo}
                                                onChange={this.onChangetrainNo}
                                            />
                                            <MDBInput
                                                label="station"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.station}
                                                onChange={this.onChangestation}
                                            />
                                            <MDBInput
                                                label="Train Name"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.TrainName}
                                                onChange={this.onChangeTrainName}
                                            />
                                            <MDBInput
                                                label="Departure Date"
                                                icon="envelope"
                                                group
                                                type="date"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.departureDate}
                                                onChange={this.onChangedepartureDate}
                                            />
                                            <MDBInput
                                                label="Arrival Date"
                                                icon="exclamation-triangle"
                                                group
                                                type="date"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.arrivalDate}
                                                onChange={this.onChangearrivalDate}
                                            />
                                            <MDBInput
                                                label="Departure Time"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.departureTime}
                                                onChange={this.onChangedepartureTime}
                                            />
                                            <MDBInput
                                                label="Arrival Time"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.arrivalTime}
                                                onChange={this.onChangearrivalTime}
                                            />
                                            <MDBInput
                                                label="Duration"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.duration}
                                                onChange={this.onChangeduration}
                                            />
                                            <MDBInput
                                                label="Origin"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.origin}
                                                onChange={this.onChangeorigin}
                                            />
                                            <MDBInput
                                                label="Destination"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.destination}
                                                onChange={this.onChangedestination}
                                            />
                                            <MDBInput
                                                label="Class"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.classes}
                                                onChange={this.onChangeclasses}
                                            />
                                            <MDBInput
                                                label="noOfSeats"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.noOfSeats}
                                                onChange={this.onChangenoOfSeats}
                                            />
                                            <MDBInput
                                                label="Price"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.price}
                                                onChange={this.onChangeprice}
                                            />
                                        </div>

                                        <div className="text-center py-4 mt-3">


                                            <MDBBtn color="cyan" type="submit" onClick={this.state.submit} style={stylecolor}>
                                                submit
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


                <MDBContainer style={style1}>
                    <MDBRow>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.submit}>
                                        <p className="h4 text-center py-4">Add Flight</p>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Flight id"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.trainNo}
                                                onChange={this.onChangetrainNo}
                                            />
                                            <MDBInput
                                                label="Airport"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.station}
                                                onChange={this.onChangestation}
                                            />
                                            <MDBInput
                                                label="Flight Name"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.TrainName}
                                                onChange={this.onChangeTrainName}
                                            />
                                            <MDBInput
                                                label="Departure Date"
                                                icon="envelope"
                                                group
                                                type="date"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.departureDate}
                                                onChange={this.onChangedepartureDate}
                                            />
                                            <MDBInput
                                                label="Arrival Date"
                                                icon="exclamation-triangle"
                                                group
                                                type="date"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.arrivalDate}
                                                onChange={this.onChangearrivalDate}
                                            />
                                            <MDBInput
                                                label="Departure Time"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.departureTime}
                                                onChange={this.onChangedepartureTime}
                                            />
                                            <MDBInput
                                                label="Arrival Time"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.arrivalTime}
                                                onChange={this.onChangearrivalTime}
                                            />
                                            <MDBInput
                                                label="Duration"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.duration}
                                                onChange={this.onChangeduration}
                                            />
                                            <MDBInput
                                                label="Origin"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.origin}
                                                onChange={this.onChangeorigin}
                                            />
                                            <MDBInput
                                                label="Destination"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.destination}
                                                onChange={this.onChangedestination}
                                            />
                                            <MDBInput
                                                label="Flight Class"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.classes}
                                                onChange={this.onChangeclasses}
                                            />
                                            <MDBInput
                                                label="Seat Number"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.noOfSeats}
                                                onChange={this.onChangenoOfSeats}
                                            />
                                            <MDBInput
                                                label="Price"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.price}
                                                onChange={this.onChangeprice}
                                            />
                                        </div>

                                        <div className="text-center py-4 mt-3">


                                            <MDBBtn color="cyan" type="submit" onClick={this.state.submit} style={stylecolor}>
                                                submit
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



                <MDBContainer style={style2}>
                    <MDBRow>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardBody>
                                    <form onSubmit={this.submit}>
                                        <p className="h4 text-center py-4">Add Bus/Coach</p>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Bus Vehicle Registration No"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.trainNo}
                                                onChange={this.onChangetrainNo}
                                            />
                                            <MDBInput
                                                label="Bus stop/station"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.station}
                                                onChange={this.onChangestation}
                                            />
                                            <MDBInput
                                                label="Bus Service Name"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.TrainName}
                                                onChange={this.onChangeTrainName}
                                            />
                                            <MDBInput
                                                label="Bus Departure Date"
                                                icon="envelope"
                                                group
                                                type="date"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.departureDate}
                                                onChange={this.onChangedepartureDate}
                                            />
                                            <MDBInput
                                                label="Bus Arrival Date"
                                                icon="exclamation-triangle"
                                                group
                                                type="date"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.arrivalDate}
                                                onChange={this.onChangearrivalDate}
                                            />
                                            <MDBInput
                                                label="Departure Time"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.departureTime}
                                                onChange={this.onChangedepartureTime}
                                            />
                                            <MDBInput
                                                label="Arrival Time"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.arrivalTime}
                                                onChange={this.onChangearrivalTime}
                                            />
                                            <MDBInput
                                                label="Duration"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.duration}
                                                onChange={this.onChangeduration}
                                            />
                                            <MDBInput
                                                label="Origin"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.origin}
                                                onChange={this.onChangeorigin}
                                            />
                                            <MDBInput
                                                label="Destination"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.destination}
                                                onChange={this.onChangedestination}
                                            />
                                            <MDBInput
                                                label="Bus Class"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.classes}
                                                onChange={this.onChangeclasses}
                                            />
                                            <MDBInput
                                                label="Bus Seats"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.noOfSeats}
                                                onChange={this.onChangenoOfSeats}
                                            />
                                            <MDBInput
                                                label="Price"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.price}
                                                onChange={this.onChangeprice}
                                            />
                                        </div>

                                        <div className="text-center py-4 mt-3">


                                            <MDBBtn color="cyan" type="submit" onClick={this.state.submit} style={stylecolor}>
                                                submit
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






            </div>
        );
    };
}