import React, {Component} from 'react';
import CustomerList from '../../components/customers/CustomerList.js';
import AdultList from '../../components/adults/AdultList.js';
import ChildList from '../../components/children/ChildList.js';

import Request from '../../helpers/Request.js';

class CustomerContainer extends Component {
  constructor(props){
    super(props);
    this.state = {customers: []}
  }

  componentDidMount(){
      let request = new Request()
      request.get('/api/customers').then((data) => {
        this.setState({customers: data._embedded.customers})
      })
    }

  render(){
    return (
      <div>
        <AdultList adults={this.state.adults}/>
        <ChildList children={this.state.children}/>
      </div>
    )
  }
}

export default CustomerContainer;
