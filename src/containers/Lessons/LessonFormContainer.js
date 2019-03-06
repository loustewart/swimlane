import React, { Component } from 'react';
import Request from '../../helpers/Request.js';
import LessonForm from '../../components/lessons/LessonForm.js';

class LessonFormContainer extends Component {
  constructor(props) {
    super(props)
    this.handleLessonPost = this.handleLessonPost.bind(this);
  }

  handleLessonPost(lesson) {
    const request = new Request();
    request.post('/api/lessons', lesson).then(() => {
      window.location = '/lessons';
    });
  }

  render() {
    return <LessonForm onSubmit={this.handleLessonPost} />
  }

}
export default LessonFormContainer;
