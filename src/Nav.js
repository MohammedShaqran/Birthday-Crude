import React, { Component } from 'react';

class Nav extends Component {

  render() {
    return (
        <div className="Nav">
            <div className="IconRow">
                <img className="myIcon" src={require("./assets/birthdayCake.svg")} alt="birthday cake icon" />
                <img className="myIcon" src={require("./assets/birthdayCake.svg")} alt="birthday cake icon" />
                <img className="myIcon" src={require("./assets/birthdayCake.svg")} alt="birthday cake icon" />
            </div>
            <h1>Welcome to Birthday List</h1>
        </div>
    );
  }
}

export default Nav;
