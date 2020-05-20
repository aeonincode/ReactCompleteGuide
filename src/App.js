import React, { Component } from 'react';
// import styled from 'styled-components';

//import './App.css';
import classes from './App.module.css';
import Person from './Person/Person';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// const StyledButton = styled.button`
//   background-color: ${(props) => (props.alt ? 'red' : 'green')};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${(props) => (props.alt ? 'salmon' : 'lightgreen')};
//     color: black;
//   }
// `;

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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
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
    let persons = null;
    let btnClass = '';

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
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      // if (this.state.showPersons) {
      //   persons = (
      //     <div>
      //       {this.state.persons.map((person, index) => {
      //         return (
      //           <ErrorBoundary key={person.id}>
      //             <Person
      //               click={() => this.deletePersonHandler(index)}
      //               name={person.name}
      //               age={person.age}
      //               changed={(event) => this.nameChangedHandler(event, person.id)}
      //             />
      //           </ErrorBoundary>
      //         );
      //       })}
      //     </div>
      //   );

      btnClass = classes.Red;
    }

    // let classes = ['red', 'bold'].join(' ');
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold]
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
