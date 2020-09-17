import React from "react";

function SimpleComponent(props) {
  //   const userData = props.userData;
  const { userData } = props;
  return (
    <div>
      {/* <h1>first name: {userData.fname}</h1>
      <h1>last name: {userData.lname}</h1> */}
      <h2>Functional Component</h2>
    </div>
  );
}

export default SimpleComponent;
