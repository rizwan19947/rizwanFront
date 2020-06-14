import React from 'react';
import './App.css';
import Home from './Home';
import Schedule from './Schedule';
import Bookings from './Bookings';
import Services from './Services';
import Comparision1 from './Comparision1';
import Aboutus from './Aboutus';
import Login from './login';
import addflights from './addflights';
import Comparision from './Comparision';
import AdminBookings from './AdminBookings';

import { Switch, Route, Link } from 'react-router-dom';


var obj = global.localStorage;



function App() {

    

    if (obj.getItem('adminAccess') != null) {

        return (
            <React.Fragment>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/Schedule" component={Schedule} />
                    <Route path="/Bookings" component={Bookings} />
                    <Route path="/Services" component={Services} />
                    <Route path="/AdminBookings" component={AdminBookings}/>
                    <Route path="/Comparision" component={Comparision} />
                    <Route path="/Comparision1" component={Comparision1} />
                    <Route path="/Aboutus" component={Aboutus} />
                    <Link to="/login" component={Login} />
                    <Link to="/addflights" component={addflights} />
                    <Route path='/' component={Home} />

                </Switch>

            </React.Fragment>

        );
    }
    else {

        return (
            <React.Fragment>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/Bookings" component={Bookings} />
                    <Route path="/Services" component={Services} />
                    <Route path="/Aboutus" component={Aboutus} />
                    <Link to="/login" component={Login} />
                    <Link to="/addflights" component={addflights} />
                    <Route path='/' component={Home} />

                </Switch>

            </React.Fragment>

        );

    }
}

export default App;
 