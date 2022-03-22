import React, { Component } from "react";

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
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={account.username}
              onChange={this.handleOnChange}
              name="username"
              autoFocus
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleOnChange}
              name="password"
              id="password"
              type="password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary mb-5">LogIn</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
