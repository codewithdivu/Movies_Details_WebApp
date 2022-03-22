import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  // username = React.createRef();

  // componentDidMount(){
  //     this.username.current.focus();
  // }

  handleSubmit = (e) => {
    e.preventDefault();

    // const ll = this.username.current.value;
    // console.log(ll,"Submitted...");
  };

  handleOnChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
    console.log(this.state.account);
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleOnChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleOnChange}
          />

          <div className="form-group">
            <button className="btn btn-primary mb-5">LogIn</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
