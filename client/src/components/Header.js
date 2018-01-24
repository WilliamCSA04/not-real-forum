import React, { Component } from 'react';
import "../scss/Header.scss"
import Button from './Button';
class Header extends Component {
  
  render() {
    return (
      <div className="col-12 header">
      <div className="row">
        <div className="col-5 col-1-offset vertical-align-middle">
            <h1 className="header-title">Not real forum</h1>
        </div>
        <div className="col-2 col-4-offset vertical-align-middle">
          <div>
            <Button value="login" classesNames="btn-dark"/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Header;