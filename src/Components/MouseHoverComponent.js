import React from "react";
import UpdatedComponent from "./WithCounter";

class MouseHoverComponent extends React.Component {
  render() {
    let { count, increment } = this.props;
    return (
      <div>
        <h1 onMouseMove={increment}>mouse hover count is:{count}</h1>
      </div>
    );
  }
}
export default UpdatedComponent(MouseHoverComponent);
