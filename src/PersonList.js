import React, { Component } from 'react';

class PersonList extends Component {

  render() {
    return (
      <div>
        <ul className="PersonList">
            {this.props.people.map((person) =>
            <li key={person.id} onClick={() => this.props.goToPersonEdit(person)}>{person.firstName} {person.lastName}:<br/> {person.birthday}</li>)}
        </ul>
        <button className="button-primary" onClick={() => this.props.goToPersonAdd()}>
        Add a Person
        </button>
      </div>          
    );
  }
}

export default PersonList;
