import React from "react";
import { connect } from "react-redux";
import { COUNT } from "../actions/actionTypes";

class ReduxExample extends React.Component {
  incrementCount = () => {
    this.props.dispatch({ type: COUNT.INCREMENT });
  };
  decrementCount = () => {
    this.props.dispatch({ type: COUNT.DECREMENT });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>count is: {this.props.count}</h1>
        <button onClick={this.incrementCount}>increment</button>{" "}
        <button onClick={this.decrementCount}>decrement</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.Count.count,
  };
};

export default connect(mapStateToProps)(ReduxExample);
