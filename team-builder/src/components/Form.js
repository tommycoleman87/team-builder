import React, { useState, useEffect } from "react";

const Form = ({memberToEdit, addTeamMember, editMember}) => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

 const changeHandler = (event) => {
    const { name, value } = event.target;
    setMember({...member, [name]: value})
   // console.log(member)
  }

  useEffect(() => {
    if(memberToEdit) {
      setMember(memberToEdit)
      console.log(memberToEdit)
    }
  }, [memberToEdit])

  const addToTeam = (e) => {
    const addMember = addTeamMember;
    //console.log(addTeamMember)
    //console.log(member.name)
    addMember(member);
    setMember({ name: "", email: "", role: "" });
    e.preventDefault()
  }

  const editTeamMember = (e) => {
    const edit = editMember;
    edit(member);
    setMember({ name: "", email: "", role: "" });
    console.log('edited')
    e.preventDefault();
  }


if(memberToEdit) {
  return (
    <form onSubmit={editTeamMember}>
      <label>
        Name
        <div>
          <input name="name"  value={member.name} onChange={(event) => changeHandler(event)}/>
        </div>
      </label>
      <label>
        E-Mail
        <div>
          <input name="email"  value={member.email} onChange={(event) => changeHandler(event)}/>
        </div>
      </label>
      <label>
        Role
        <div>
          <input name="role"  value={member.role} onChange={(event) => changeHandler(event)}/>
        </div>
      </label>
      <button>Submit</button>
    </form>
  );
} else {
  return (
    <form onSubmit={addToTeam}>
      <label>
        Name
        <div>
          <input name="name"  value={member.name} onChange={(event) => changeHandler(event)}/>
        </div>
      </label>
      <label>
        E-Mail
        <div>
          <input name="email" value={member.email} onChange={(event) => changeHandler(event)}/>
        </div>
      </label>
      <label>
        Role
        <div>
          <input name="role" value={member.role} onChange={(event) => changeHandler(event)}/>
        </div>
      </label>
      <button>Submit</button>
    </form>
  );
  
}
};

export default Form;
