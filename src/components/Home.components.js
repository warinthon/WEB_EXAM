import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <p>รหัสนิสิต: 57021971</p>
        <p>ชื่อ: นายวรินทร สรสิทธิ์</p>
      </div>
    );
  }
}

export default withRouter(HomePage);

