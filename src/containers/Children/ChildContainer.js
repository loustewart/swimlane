import React, {Component} from 'react';
import ChildList from '../../components/children/ChildList.js';

import Request from '../../helpers/Request.js';

class ChildContainer extends Component {
  constructor(props){
    super(props);
    this.state = {children: []}
  }

  componentDidMount(){
      let request = new Request()
      request.get('/api/children').then((data) => {
        this.setState({children: data._embedded.children})
      })
    }

  render(){
    return (
        <ChildList children={this.state.children}/>
    )
  }
}

export default ChildContainer;
