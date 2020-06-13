import React, { Component } from 'react';
import Base64 from '../node_modules/base64-img';
import axios from 'axios';

class TableRow extends Component {

  /*  delete(e){
       var id = e.target.value;
       axios.delete('http://localhost:4000/api/flight/'+id,window.location.reload());
       
   }
  */


  delete(flightid) {
    const obj = {
      flightid: flightid
    };
    console.log("deleting flight!!!!!!!!!!!!!!!!!");
    fetch('http://localhost:4000/api/flight/deleteflights', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'accept': "application/json" },
      body: JSON.stringify(obj)
    }
    )
  };


  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };
  componentDidMount() {
    fetch('http://localhost:4000/api/flight/getflights')
      .then((res) => res.json())
      .then((data) => {
        var base64Flag = 'data:image/jpeg;base64,';
        var imageStr =
          this.arrayBufferToBase64();
        this.setState({
          img: base64Flag + imageStr
        })
      })
  }
  render() {
    return (
      <tr>
        <td>
          {this.props.obj.flightNo}
        </td>

        <td>
          {this.props.obj.Airline}
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
            {/*<td>
                <button className="btn btn-primary">Edit</button>
            </td>*/}
        <td>
          <button className="btn btn-danger" onClick={() =>
            this.delete(this.props.obj.flightid)
          }
          >Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;