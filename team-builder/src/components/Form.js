import React, { useState } from "react";

const Form = ({addTeamMember}) => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

 const changeHandler = (event) => {
    const { name, value } = event.target;
    setMember({...member, [name]: value})
    console.log(member)
  }

  const addToTeam = (e) => {
    const addMember = addTeamMember;
    //console.log(addTeamMember)
    //console.log(member.name)
    addMember(member);
    e.preventDefault()
  }



  return (
    <form onSubmit={addToTeam}>
      <label>
        Name
        <div>
          <input name="name" onChange={(event) => changeHandler(event)}/>
        </div>
      </label>
      <label>
        E-Mail
        <div>
          <input name="email" onChange={(event) => changeHandler(event)}/>
        </div>
      </label>
      <label>
        Role
        <div>
          <input name="role" onChange={(event) => changeHandler(event)}/>
        </div>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Form;
