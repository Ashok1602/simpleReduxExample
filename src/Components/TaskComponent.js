import React from "react";
import { connectAdvanced } from "react-redux";
import UserModal from "./Modals/userModal";

class TaskComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "ashok",
      lastName: "sudagani",
      showModal: false,
    };
  }
  handleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  updateData = (data) => {
    this.setState({
      firstName: data.firstName,
      lastName: data.lastName,
    });
  };
  render() {
    return (
      <div>
        {this.state.showModal && (
          <UserModal
            IsModalOpen={this.state.showModal}
            handleModal={this.handleModal}
            userData={this.state}
            updateData={this.updateData}
          />
        )}
        <h1>first name:{this.state.firstName}</h1>
        <h1>last name:{this.state.lastName}</h1>
        <input type='button' value='change data' onClick={this.handleModal} />
      </div>
    );
  }
}

export default TaskComponent;
