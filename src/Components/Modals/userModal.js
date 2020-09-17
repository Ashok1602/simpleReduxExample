import React, { Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class UserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.userData.firstName,
      lastName: this.props.userData.lastName,
    };
  }
  toggle = () => {
    this.props.handleModal();
  };
  changeName = (e, bool) => {
    if (bool) {
      this.setState({
        firstName: e.target.value,
      });
    } else {
      this.setState({
        lastName: e.target.value,
      });
    }
  };
  updateData = () => {
    this.props.updateData(this.state);
    this.props.handleModal();
  };
  render() {
    // console.log(this.state.firstName, this.state.lastName);
    return (
      <>
        <Modal isOpen={this.props.IsModalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody style={{ textAlign: "center" }}>
            <span>first name:</span>{" "}
            <input
              type='text'
              value={this.state.firstName}
              onChange={(e) => this.changeName(e, true)}
            />{" "}
            <br />
            <span>last name:</span>{" "}
            <input
              type='text'
              value={this.state.lastName}
              onChange={(e) => this.changeName(e, false)}
            />{" "}
            <br />
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.updateData}>
              Do Something
            </Button>{" "}
            <Button color='secondary' onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default UserModal;
