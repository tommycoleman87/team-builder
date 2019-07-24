import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';


function App() {
  const [team, setTeam] = useState([]);
  console.log(team)
  const teamHandler = (member) => {
    console.log(team);
    return setTeam([...team, member])
   
  }
  return (
    <div className="App">
    <Form addTeamMember={member => teamHandler(member)}/>
    </div>
  );
}

export default App;
