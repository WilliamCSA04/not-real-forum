import React, { Component } from 'react';
import "../scss/Header.scss"
class Header extends Component {
  
  render() {
    return (
      <div className="col-12 header">
      <div className="row">
        <div className="col-11 col-1-fill vertical-align-middle">
            <h1 className="header-title">Not real forum</h1>
        </div>
      </div>
      </div>
    );
  }
}
export default Header;