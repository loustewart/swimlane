import React, {Component} from 'react';
import AdultList from '../../components/adults/AdultList.js';

import Request from '../../helpers/Request.js';

class AdultContainer extends Component {
  constructor(props){
    super(props);
    this.state = {adults: []}
  }

  componentDidMount(){
      let request = new Request()
      request.get('/api/adults').then((data) => {
        this.setState({adults: data._embedded.adults})
      })
    }

  render(){
    return (
      <div className="return-all">
        <AdultList adults={this.state.adults}/>
      </div>
    )
  }
}

export default AdultContainer;
