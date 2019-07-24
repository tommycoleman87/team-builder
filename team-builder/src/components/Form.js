import React, { useState } from "react";

const Form = () => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

 const changeHandler = (event) => {
    const { name, value } = event.target;
    setMember({...member, [name]: value})
    console.log(member)
  }
  return (
    <form>
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
    </form>
  );
};

export default Form;
