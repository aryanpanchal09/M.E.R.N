import React, { useState } from "react";
function CompA() {
  const [name, setName] = useState("Rohan");
  const HandleForm = (e) => {
    e.preventDefault(); // avoids the reloading of a page again and again
    console.log(e.target[0].value);
  };
  return (
    <div>
      <form onSubmit={HandleForm}>
        <label>Enter Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CompA;
