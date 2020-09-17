import React from "react";
import { Input, Button, FormGroup, Label } from "reactstrap";
import { reduxForm, Field } from "redux-form";
import compose from "compose-function";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit = (formvalues) => {
    console.log(formvalues);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className='LoginBox'>
        <form
          noValidate
          onSubmit={handleSubmit(this.onSubmit)}
          className='LoginForm'
        >
          <FormGroup className='LoginFieldStyle'>
            <Label for='username'>Enter Username*</Label>
            <br />
            <Field
              className='inputStyle'
              component={Input}
              type='email'
              placeholder='Username'
              id='username'
              name='username'
              required
            />
          </FormGroup>
          <FormGroup className='LoginFieldStyle'>
            <Label>Enter Password*</Label>
            <br />
            <Field
              className='inputStyle'
              component={Input}
              type='password'
              placeholder='password'
              name='password'
              required
            />
          </FormGroup>
          <Button className='mx-auto'>Submit</Button>
        </form>
      </div>
    );
  }
}

export default compose(
  reduxForm({
    form: "LoginForm",
  })
)(Login);
