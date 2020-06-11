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



import { Switch, Route ,Link} from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
    <Switch>
      <Route path="/home" component={ Home } />
      <Route path="/Schedule" component={ Schedule } />
      <Route path="/Bookings" component={ Bookings } />
      <Route path="/Services" component={ Services } />
      <Route path="/Comparision" component={ Comparision } />
      <Route path="/Comparision1" component={ Comparision1 } />
      <Route path="/Aboutus" component={ Aboutus } />
      <Link to="/login" component={ Login  } />
      <Link to="/addflights" component={ addflights  } />           
      <Route path='/' component={ Home } />
      
    </Switch>
       
    </React.Fragment>
    
  );
}

export default App;
 