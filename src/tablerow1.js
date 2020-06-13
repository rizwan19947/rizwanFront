import React, { Component } from 'react';
//import Base64 from '../node_modules/base64-img';

class TableRow1 extends Component {
  componentDidMount() {
    fetch('http://localhost:4000/api/train/gettrains')
      .then((res) => res.json())
  }

  delete(trainid) {
    const obj = {
      trainid: trainid
    };
    console.log("TRAIN DELETE!!!!")
    fetch('http://localhost:4000/api/train/deletetrain', {
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
          {this.props.obj.trainNo}
        </td>
        <td>
          {this.props.obj.station}
        </td>
        <td>
          {this.props.obj.TrainName}
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
            this.delete(this.props.obj.trainid)
          }

          >Delete</button>
        </td>
      </tr>
    );
  }
}

export default TableRow1;