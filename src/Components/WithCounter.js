import React from "react";
const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        name: "ashok",
      };
    }
    increment = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          increment={this.increment}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
