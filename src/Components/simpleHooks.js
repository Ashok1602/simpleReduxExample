import React, { useState, useEffect } from "react";

function SimpleHook() {
  const [name, updateNames] = useState({ fname: "Ashok", lname: "sudagani" });
  const [count, increment] = useState(0);
  //componentDidMount
  useEffect(() => {
    console.log("componentDidMount");
  }, []);
  //ComponentDidUpdate
  useEffect(() => {
    console.log("ComponentDidUpdate");
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "5%" }}>
      <span>first name</span>
      <input
        type='text'
        onChange={(e) => updateNames({ ...name, fname: e.target.value })}
        value={name.fname}
      />
      <br />
      <span>last name</span>
      <input
        type='text'
        onChange={(e) => updateNames({ ...name, lname: e.target.value })}
        value={name.lname}
      />
      <br />
      <button onClick={() => increment(count + 1)}>count is:{count}</button>
    </div>
  );
}

export default SimpleHook;
