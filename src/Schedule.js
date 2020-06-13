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
import { stringify } from "querystring";
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


const style3 = {
    height: '500px',
    width: '300px',
    // padding: '20px',
    margin: '1px',
    float: 'right',
    // background: '#5BDAFF',



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
            flightNo: '',
            airport: '',
            flightName: '',
            flightDeparture: '',
            flightArrival: '',
            flightDepartTime: '',
            flightArriveTime: '',
            flightDuration: '',
            flightOrigin: '',
            flightDestination: '',
            flightClass: '',
            flightSeats: '',
            flightPrice: '',
            busNo: '',
            busStation: '',
            busName: '',
            busDeparture: '',
            busArrival: '',
            busDepartTime: '',
            busArriveTime: '',
            busDuration: '',
            busOrigin: '',
            busDestination: '',
            busClass: '',
            busSeats: '',
            busPrice: '',
            redirect: false




            /*this.state = {
    
                train: [
                    {
    
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
                    }]
                    */



        };


        /*this.state =
        {
            flightNo: '',
            airport: '',
            flightName: '',
            flightDeparture: '',
            flightArrival: '',
            flightDepartTime: '',
            flightArriveTime: '',
            flightDuration: '',
            flightOrigin: '',
            flightDestination: '',
            flightClass: '',
            flightSeats: '',
            flightPrice: '',
            redirerct: false

        };

        this.state =
        {
            busNo: '',
            busStation: '',
            busName: '',
            busDeparture: '',
            busArrival: '',
            departTime: '',
            arriveTime: '',
            busDuration: '',
            busOrigin: '',
            busDestination: '',
            busClass: '',
            busSeats: '',
            busPrice: '',
            redirerct: false

        };*/

        //TRAIN
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
        this.trainsubmithandler = this.trainsubmithandler.bind(this);

        //FLIGHT
        this.onChangeflightNo = this.onChangeflightNo.bind(this);
        this.onChangeairport = this.onChangeairport.bind(this);
        this.onChangeflightName = this.onChangeflightName.bind(this);
        this.onChangeflightDeparture = this.onChangeflightDeparture.bind(this);
        this.onChangeflightArrival = this.onChangeflightArrival.bind(this);
        this.onChangeflightDepartTime = this.onChangeflightDepartTime.bind(this);
        this.onChangeflightArriveTime = this.onChangeflightArriveTime.bind(this);
        this.onChangeflightDuration = this.onChangeflightDuration.bind(this);
        this.onChangeflightOrigin = this.onChangeflightOrigin.bind(this);
        this.onChangeflightDestination = this.onChangeflightDestination.bind(this);
        this.onChangeflightClass = this.onChangeflightClass.bind(this);
        this.onChangeflightSeats = this.onChangeflightSeats.bind(this);
        this.onChangeflightPrice = this.onChangeflightPrice.bind(this);
        this.flightsubmithandler = this.flightsubmithandler.bind(this);


        this.onChangebusNo = this.onChangebusNo.bind(this);
        this.onChangebusStation = this.onChangebusStation.bind(this);
        this.onChangebusName = this.onChangebusName.bind(this);
        this.onChangebusDeparture = this.onChangebusDeparture.bind(this);
        this.onChangebusArrival = this.onChangebusArrival.bind(this);
        this.onChangedepartTime = this.onChangedepartTime.bind(this);
        this.onChangearriveTime = this.onChangearriveTime.bind(this);
        this.onChangebusDuration = this.onChangebusDuration.bind(this);
        this.onChangebusOrigin = this.onChangebusOrigin.bind(this);
        this.onChangebusDestination = this.onChangebusDestination.bind(this);
        this.onChangebusClass = this.onChangebusClass.bind(this);
        this.onChangebusSeats = this.onChangebusSeats.bind(this);
        this.onChangebusPrice = this.onChangebusPrice.bind(this);
        this.bussubmithandler = this.bussubmithandler.bind(this);




        //THIS WORKS///
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






    onChangeflightNo(e) {

        this.setState({ flightNo: e.target.value });
    }
    onChangeairport(e) {
        this.setState({ airport: e.target.value });
    }
    onChangeflightName(e) {
        this.setState({ flightName: e.target.value });
    }
    onChangeflightDeparture(e) {
        this.setState({ flightDeparture: e.target.value });
    }
    onChangeflightArrival(e) {
        this.setState({ flightArrival: e.target.value });
    }

    onChangeflightDepartTime(e) {
        this.setState({ flightDepartTime: e.target.value });
    }
    onChangeflightArriveTime(e) {
        this.setState({ flightArriveTime: e.target.value });
    }
    onChangeflightDuration(e) {
        this.setState({ flightDuration: e.target.value });
    }
    onChangeflightOrigin(e) {
        this.setState({ flightOrigin: e.target.value });
    }

    onChangeflightDestination(e) {
        this.setState({ flightDestination: e.target.value });
    }
    onChangeflightClass(e) {
        this.setState({ flightClass: e.target.value });
    }
    onChangeflightSeats(e) {
        this.setState({ flightSeats: e.target.value });
    }

    onChangeflightPrice(e) {
        this.setState({ flightPrice: e.target.value });
    }







    onChangebusNo(e) {
        this.setState({ busNo: e.target.value });
    }
    onChangebusStation(e) {
        this.setState({ busStation: e.target.value });
    }
    onChangebusName(e) {
        this.setState({ busName: e.target.value });
    }
    onChangebusDeparture(e) {
        this.setState({ busDeparture: e.target.value });
    }
    onChangebusArrival(e) {
        this.setState({ busArrival: e.target.value });
    }

    onChangedepartTime(e) {
        this.setState({ busDepartTime: e.target.value });
    }
    onChangearriveTime(e) {
        this.setState({ busArriveTime: e.target.value });
    }
    onChangebusDuration(e) {
        this.setState({ busDuration: e.target.value });
    }
    onChangebusOrigin(e) {
        this.setState({ busOrigin: e.target.value });
    }

    onChangebusDestination(e) {
        this.setState({ busDestination: e.target.value });
    }
    onChangebusClass(e) {
        this.setState({ busClass: e.target.value });
    }
    onChangebusSeats(e) {
        this.setState({ busSeats: e.target.value });
    }

    onChangebusPrice(e) {
        this.setState({ busPrice: e.target.value });
    }






    /*
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
    */


    trainsubmithandler(e) {
        e.preventDefault();
        console.log("Train Submitting");
        const obj = {
            trainNo: this.state.trainNo,
            station: this.state.station,
            TrainName: this.state.TrainName,
            departureDate: this.state.departureDate,
            arrivalDate: this.state.arrivalDate,
            departureTime: this.state.departureTime,
            arrivalTime: this.state.arrivalTime,
            duration: this.state.duration,
            origin: this.state.origin,
            destination: this.state.destination,
            classes: this.state.classes,
            noOfSeats: this.state.noOfSeats,
            price: this.state.price,

        }
        console.log(JSON.stringify(obj) + "Train submission In Progress");
        fetch('http://localhost:4000/api/train/newtrain', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'accept': "application/json" },
            body: JSON.stringify(obj)

        })
        alert('Submission Successful!');

        this.setState({ trainNo: '' });
        this.setState({ station: '' });
        this.setState({ TrainName: '' });
        this.setState({ departureDate: '' });
        this.setState({ arrivalDate: '' });
        this.setState({ departureTime: '' });
        this.setState({ arrivalTime: '' });
        this.setState({ duration: '' });
        this.setState({ origin: '' });
        this.setState({ destination: '' });
        this.setState({ classes: '' });
        this.setState({ noOfSeats: '' });
        this.setState({ price: '' });



    }
    flightsubmithandler(e) {
        e.preventDefault();
        console.log("FLight Submitting");
        const obj = {
            flightNo: this.state.flightNo,
            AirportId: this.state.airport,
            Airline: this.state.flightName,
            departureDate: this.state.flightDeparture,
            arrivalDate: this.state.flightArrival,
            departureTime: this.state.flightDepartTime,
            arrivalTime: this.state.flightArriveTime,
            duration: this.state.flightDuration,
            origin: this.state.flightOrigin,
            destination: this.state.flightDestination,
            classes: this.state.flightClass,
            noOfSeats: this.state.flightSeats,
            price: this.state.flightPrice,


            
        }
        console.log(JSON.stringify(obj) + "flight submission In Progress");
        fetch('http://localhost:4000/api/flight/newflight', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'accept': "application/json" },
            body: JSON.stringify(obj)

        })
        alert('Submission FLIGHT Successful!');

        this.setState({ flightNo: '' });
        this.setState({ airport: '' });
        this.setState({ flightName: '' });
        this.setState({ flightDeparture: '' });
        this.setState({ flightArrival: '' });
        this.setState({ flightDepartTime: '' });
        this.setState({ flightArriveTime: '' });
        this.setState({ flightDuration: '' });
        this.setState({ flightOrigin: '' });
        this.setState({ flightDestination: '' });
        this.setState({ flightClass: '' });
        this.setState({ flightSeats: '' });
        this.setState({ flightPrice: '' });



    

        }

    bussubmithandler(e) {
        e.preventDefault();
        console.log("bus Submitting");
        const obj = {
            busNo: this.state.busNo,
            station: this.state.busStation,
            BusName: this.state.busName,
            departureDate: this.state.busDeparture,
            arrivalDate: this.state.busArrival,
            departureTime: this.state.busDepartTime,
            arrivalTime: this.state.busArriveTime,
            duration: this.state.busDuration,
            origin: this.state.busOrigin,
            destination: this.state.busDestination,
            classes: this.state.busClass,
            noOfSeats: this.state.busSeats,
            price: this.state.busPrice,

        }
        console.log(JSON.stringify(obj) + "Bus submission In Progress");
        fetch('http://localhost:4000/api/bus/newbus', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'accept': "application/json" },
            body: JSON.stringify(obj)

        })
        alert('Submission Successful!');

        this.setState({ busNo: '' });
        this.setState({ busStation: '' });
        this.setState({ busName: '' });
        this.setState({ busDeparture: '' });
        this.setState({ busArrival: '' });
        this.setState({ busDepartTime: '' });
        this.setState({ busArriveTime: '' });
        this.setState({ busDuration: '' });
        this.setState({ busOrigin: '' });
        this.setState({ busDestination: '' });
        this.setState({ busClass: '' });
        this.setState({ busSeats: '' });
        this.setState({ busPrice: '' });



    }

    /*bussubmithandler(e) {
        e.preventDefault();
        console.log("Bus Submitting");
        const obj = {


            busNo: this.state.busNo,
            busStation: this.state.busStation,
            busName: this.state.busName,
            busDeparture: this.state.busDeparture,
            busArrival: this.state.busArrival,
            departTime: this.state.departTime,
            arriveTime: this.state.arriveTime,
            busDuration: this.state.busDuration,
            busOrigin: this.state.busOrigin,
            busDestination: this.state.busDestination,
            busClass: this.state.busClass,
            busSeats: this.state.busSeats,
            busPrice: this.state.busPrice,


        }
        console.log(JSON.stringify(obj) + "Bus submission In Progress");
        fetch('http://localhost:4000/api/bus/newbus', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'accept': "application/json" },
            body: JSON.stringify(obj)

        })
    }


    flightsubmithandler(e) {

        e.preventDefault();
        console.log("Flight Submitting");
        const obj = {


            flightNo: this.state.flightNo,
            airport: this.state.airport,
            flightName: this.state.flightName,
            flightDeparture: this.state.flightDeparture,
            flightArrival: this.state.flightArrival,
            flightDepartTime: this.state.flightDepartTime,
            flightArriveTime: this.state.flightArriveTime,
            flightDuration: this.state.flightDuration,
            flightOrigin: this.state.flightOrigin,
            flightDestination: this.state.flightDestination,
            flightClass: this.state.flightClass,
            flightSeats: this.state.flightSeats,
            flightPrice: this.state.flightPrice,



        }
        console.log(JSON.stringify(obj) + "Flight submission In Progress");
        fetch('http://localhost:4000/api/flight/newflight', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'accept': "application/json" },
            body: JSON.stringify(obj)

        })



    }*/





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


                                            <MDBBtn color="cyan" type="submit" onClick={this.trainsubmithandler} style={stylecolor}>
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
                                                value={this.state.flightNo}
                                                onChange={this.onChangeflightNo}
                                            />
                                            <MDBInput
                                                label="Airport"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.airport}
                                                onChange={this.onChangeairport}
                                            />
                                            <MDBInput
                                                label="Flight Name"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.flightName}
                                                onChange={this.onChangeflightName}
                                            />
                                            <MDBInput
                                                label="Departure Date"
                                                icon="envelope"
                                                group
                                                type="date"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.flightDeparture}
                                                onChange={this.onChangeflightDeparture}
                                            />
                                            <MDBInput
                                                label="Arrival Date"
                                                icon="exclamation-triangle"
                                                group
                                                type="date"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.flightArrival}
                                                onChange={this.onChangeflightArrival}
                                            />
                                            <MDBInput
                                                label="Departure Time"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.flightDepartTime}
                                                onChange={this.onChangeflightDepartTime}
                                            />
                                            <MDBInput
                                                label="Arrival Time"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.flightArriveTime}
                                                onChange={this.onChangeflightArriveTime}
                                            />
                                            <MDBInput
                                                label="Duration"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.flightDuration}
                                                onChange={this.onChangeflightDuration}
                                            />
                                            <MDBInput
                                                label="Origin"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.flightOrigin}
                                                onChange={this.onChangeflightOrigin}
                                            />
                                            <MDBInput
                                                label="Destination"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.flightDestination}
                                                onChange={this.onChangeflightDestination}
                                            />
                                            <MDBInput
                                                label="Flight Class"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.flightClass}
                                                onChange={this.onChangeflightClass}
                                            />
                                            <MDBInput
                                                label="Seat Number"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.flightSeats}
                                                onChange={this.onChangeflightSeats}
                                            />
                                            <MDBInput
                                                label="Price"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.flightPrice}
                                                onChange={this.onChangeflightPrice}
                                            />
                                        </div>

                                        <div className="text-center py-4 mt-3">


                                            <MDBBtn color="cyan" type="submit" onClick={this.flightsubmithandler} style={stylecolor}>
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
                                                value={this.state.busNo}
                                                onChange={this.onChangebusNo}
                                            />
                                            <MDBInput
                                                label="Bus stop/station"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.busStation}
                                                onChange={this.onChangebusStation}
                                            />
                                            <MDBInput
                                                label="Bus Service Name"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.busName}
                                                onChange={this.onChangebusName}
                                            />
                                            <MDBInput
                                                label="Bus Departure Date"
                                                icon="envelope"
                                                group
                                                type="date"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.busDeparture}
                                                onChange={this.onChangebusDeparture}
                                            />
                                            <MDBInput
                                                label="Bus Arrival Date"
                                                icon="exclamation-triangle"
                                                group
                                                type="date"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.busArrival}
                                                onChange={this.onChangebusArrival}
                                            />
                                            <MDBInput
                                                label="Departure Time"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.busDepartTime}
                                                onChange={this.onChangedepartTime}
                                            />
                                            <MDBInput
                                                label="Arrival Time"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.busArriveTime}
                                                onChange={this.onChangearriveTime}
                                            />
                                            <MDBInput
                                                label="Duration"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.busDuration}
                                                onChange={this.onChangebusDuration}
                                            />
                                            <MDBInput
                                                label="Origin"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.busOrigin}
                                                onChange={this.onChangebusOrigin}
                                            />
                                            <MDBInput
                                                label="Destination"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.busDestination}
                                                onChange={this.onChangebusDestination}
                                            />
                                            <MDBInput
                                                label="Bus Class"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.busClass}
                                                onChange={this.onChangebusClass}
                                            />
                                            <MDBInput
                                                label="Bus Seats"
                                                icon="envelope"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.busSeats}
                                                onChange={this.onChangebusSeats}
                                            />
                                            <MDBInput
                                                label="Price"
                                                icon="exclamation-triangle"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                                value={this.state.busPrice}
                                                onChange={this.onChangebusPrice}
                                            />
                                        </div>

                                        <div className="text-center py-4 mt-3">


                                            <MDBBtn color="cyan" type="submit" onClick={this.bussubmithandler} style={stylecolor}>
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






            </div>
        );
    };
}