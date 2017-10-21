import React from 'react';
import { withRouter } from 'react-router-dom';

class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      submit:''
    }
  }
  render() {
    return (
      <div>
        <button ><p>Get Data</p></button>
        <button ><p>Clear</p></button>
       
      </div>
    );
  }
}

export default withRouter(Home2);


