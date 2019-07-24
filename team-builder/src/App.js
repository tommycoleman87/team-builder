import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";


function App() {
  const [team, setTeam] = useState([]);
  const [memberToEdit, setMember] = useState();

  const teamHandler = member => {
    return setTeam([...team, member]);
  };

 

  const editMember = member => {
    const index = team.indexOf(memberToEdit);
    setMember();
    console.log(index);
    return setTeam(
      team.map((teamMember, i) => {
        if (i === index) {
          return (teamMember = member);
        } else {
          return teamMember;
        }
      })
    );
  };

  return (
    <div className="App">
      <Form
        addTeamMember={member => teamHandler(member)}
        memberToEdit={memberToEdit}
        editMember={member => editMember(member)}
      />
      {team.map((member, index) => {
        return (
          <div key={index}>
            <h2>Name: {member.name}</h2>
            <h3>Role: {member.role}</h3>
            <h3>E-mail: {member.email}</h3>
            <button onClick={() => setMember(member)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
