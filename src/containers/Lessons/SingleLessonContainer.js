import React, { Component } from 'react';
import SingleLesson from '../../components/lessons/SingleLesson.js';
import Request from '../../helpers/Request.js';

class SingleLessonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {lesson: null}
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    const url = '/api/lessons/' + this.props.id;
    request.get(url).then((data) => {
      this.setState({lesson: data})
    })
  }

  handleDelete(id) {
    const request = new Request();
      const url = '/api/lessons/' + id;
      request.delete(url).then(() => {
        window.location = "/lessons";
      });
  }

  render() {
    return (
      <SingleLesson lesson = {this.state.lesson}
      handleDelete = {this.handleDelete} />
    )
  }

}

export default SingleLessonContainer;
