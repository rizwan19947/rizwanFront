import React, { Component } from 'react';
//import Base64 from '../node_modules/base64-img';
import axios from 'axios';

class TableRow2 extends Component {

    componentDidMount() {
        fetch('http://localhost:4000/api/bus/getbus')
            .then((res) => res.json())
    }


    delete(busid) {
        const obj = {
            busid: busid
        };
        console.log("deleting BUS!!!!!!!!!!!!!!!!!");
        fetch('http://localhost:4000/api/bus/deletebus', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'accept': "application/json" },
            body: JSON.stringify(obj)
        }
        )
    };


    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.busNo}
                </td>
                <td>
                    {this.props.obj.station}
                </td>
                <td>
                    {this.props.obj.BusName}
                </td>
                <td>
                    {this.props.obj.departureDate}
                </td>
                <td>
                    {this.props.obj.arrivalDate}
                </td>
                <td>
                    {this.props.obj.origin}
                </td>
                <td>
                    {this.props.obj.destination}
                </td>
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    <button className="btn btn-primary">Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={
                        () => this.delete(this.props.obj.busid)
                    } >Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow2;