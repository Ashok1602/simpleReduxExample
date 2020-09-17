import React, { Fragment } from "react";

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
    };
  }
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <h1>first name: {this.state.userData.fname}</h1>
        <h1>last name: {this.state.userData.lname}</h1>
        <button
          onClick={() =>
            this.setState({
              userData: { fname: "arvind", lname: "sadsfds" },
            })
          }
        >
          change content
        </button>
      </div>
    );
  }
}

export default SimpleComponent;
