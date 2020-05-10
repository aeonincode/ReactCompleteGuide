import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'dbdjfb', name: 'Xerx', age: 28 },
      { id: '223efd8', name: 'Sia', age: 29 },
      { id: 'acb7dd', name: 'marts', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Sia', age: 29 },
  //       { name: 'marts', age: 27 },
  //     ],
  //   });
  // };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Xerx', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'marts', age: 26 },
      ],
    });
  };

  deletePersonHandler = (personIndex) => {
    // fist of all fetch all the persons
    // const persons = this.state.persons.slice();
    // alternative way instead of wa above use spread operator ES6
    const persons = [...this.state.persons];
    // now create new version of that persons array, this simply remove one element from array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
