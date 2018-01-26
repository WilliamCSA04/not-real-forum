import React, { Component } from 'react';
import "../scss/Header.scss"
import Button from './Button';
class Header extends Component {

  onClick = () => {
    alert("Not implemented yet");
  }
  
  render() {
    return (
      <div className="row header">
        <div className="col-8 vertical-align-middle">
            <h1 className="header-title">Not real forum</h1>
        </div>
        <div className="col-4 vertical-align-middle header-buttons">
          <div>
            <Button value="sign in" className="btn-dark" onClick={this.onClick}/>
          </div>
          <div>
            <Button value="sign up" className="btn-dark-secondary" onClick={this.onClick}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;