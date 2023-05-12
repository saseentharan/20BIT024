import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: ""
  
  });
  function handleClick(event) {
    const { value, name } = event.target;

    setContact((prevalue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevalue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevalue.fName,
          lName: value
        };
      }
    });
  }

  return (
    
    <div className="container">
      <h1>Train Booking System {contact.fName}   {contact.lName}</h1>
      
     
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={handleClick} placeholder="First Name" />
        <input name="lName" onChange={handleClick} placeholder="Last Name" />
    
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
