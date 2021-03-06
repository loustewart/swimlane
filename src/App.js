import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'

import LessonContainer from './containers/Lessons/LessonContainer.js'
import BookingContainer from './containers/Bookings/BookingContainer.js'
import ChildContainer from './containers/Children/ChildContainer.js'
import AdultContainer from './containers/Adults/AdultContainer.js'
import LessonFormContainer from './containers/Lessons/LessonFormContainer.js'
import SingleLessonContainer from './containers/Lessons/SingleLessonContainer.js'
import BookingFormContainer from './containers/Bookings/BookingFormContainer.js'
import SingleBookingContainer from './containers/Bookings/SingleBookingContainer.js'


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
          component={AdultContainer}/>
          <Route exact path = '/lessons/new' component={LessonFormContainer}/>
          <Route exact path='/lessons/:id' render = {(props) => {
          const id = props.match.params.id;
          return <SingleLessonContainer id = {id} />}}/>
          <Route exact path='/bookings/new' component={BookingFormContainer}/>
          <Route exact path='/bookings/:id' render = {(props) => {
          const id = props.match.params.id;
          return <SingleBookingContainer id = {id} />}}/>

          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
  }
}

export default App;
