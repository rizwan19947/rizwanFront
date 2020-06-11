import React from "react";
import image1 from "./plane.jpg";
import image2 from "./road.jpg";
import image3 from "./balloon.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './App.css';
import Navbar from './navbar';
import "./Home.css";


class Home extends React.Component {
    render() {

        const style1 = {
            background: '#9E9E9E',

        };

    return (
        <> 
            <div >

                <Navbar style={style1}/>
        <Carousel>
                    <div>
                        <img src={image1} className="image" alt=""  />
          </div>
          <div>
            <img src={image2} className="image" alt="" />
          </div>
          <div>
            <img src={image3} className="image" alt="" />{" "}
          </div>
                </Carousel>
                </div>
           </>
    );
  }
}

export default Home;
