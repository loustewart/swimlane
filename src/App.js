import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'

import LessonContainer from './containers/LessonContainer.js'
import BookingContainer from './containers/BookingContainer.js'
import CustomerContainer from './containers/CustomerContainer.js'

class App extends Component {
  render() {
    return(
    <div>
      <Router>
        <React.Fragment>
          <NavBar/>
          <Switch>
          <Route exect path='/lessons'
          component={LessonContainer} />

          <Route exect path='/bookings'
          component={BookingContainer} />

          <Route exect path='/customers'
          component={CustomerContainer} />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
  }
}

export default App;
