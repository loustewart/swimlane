import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'

import LessonContainer from './containers/LessonContainer.js'
import BookingContainer from './containers/Bookings/BookingContainer.js'
import CustomerContainer from './containers/Customers/CustomerContainer.js'
import ChildContainer from './containers/Children/ChildContainer.js'


class App extends Component {
  render() {
    return(
    <div>
      <Router>
        <React.Fragment>
          <NavBar/>
          <Switch>
          <Route exact path="/lessons"
          component={LessonContainer} />
          <Route exact path="/bookings"
          component={BookingContainer}/>
          <Route exact path="/customers"
          component={ChildContainer}/>
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
  }
}

export default App;
