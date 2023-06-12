import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((previnfo) => {
      return {
        ...previnfo,
        [name]: value
      };
      });
  }
  const postData = (e) =>{
      e.preventDefault();
      console.log(contact);
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form method="post" onSubmit={postData} >
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fname}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={contact.lname}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
        />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;
