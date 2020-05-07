import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'xerx', age: 40 },
      { name: 'sia', age: 37 },
      { name: 'marts', age: 36 },
    ],
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON' DO THIS: this.state.persons[0].name = 'XerxAeon';
    setPersonsState({
      persons: [
        { name: 'xerxAeon', age: 40 },
        { name: 'sia', age: 37 },
        { name: 'marts', age: 37 },
      ],
    });
  };

  return (
    <div className='App'>
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
