import { render } from "@testing-library/react";
import React, { Component } from "react";

class ClockComponent extends React.Component {
  constructor(props) {
    console.log("constructor called");
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    console.log("componentDidMount is called");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("componentUnMount is called");
    clearInterval(this.timerID);
  }

  componentDidUpdate = (nextProps, nextState) => {
    if (this.state.date !== nextState.date) {
      console.log("ComponentDidUpdated is called");
    }
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    console.log("render method called");
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={() => clearInterval(this.timerID)}>
          stop time
        </button>{" "}
        <button
          onClick={() => (this.timerID = setInterval(() => this.tick(), 1000))}
        >
          start again
        </button>
      </div>
    );
  }
}

export default ClockComponent;
