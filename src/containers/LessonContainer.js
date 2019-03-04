import React, {Component} from 'react';
import LessonList from '../components/lessons/LessonList.js';
import Request from '../helpers/Request.js';


class LessonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {lessons: []}
  }

  componentDidMount(){
      let request = new Request()
      request.get('/api/lessons').then((data) => {
        this.setState({lessons: data._embedded.lessons})
      })
    }

  render(){
    return (
        <LessonList lessons={this.state.lessons}/>
    )
  }
}

export default LessonContainer;
