import { Component } from "react";
import LoginService from "../../../Shared/Services/LoginService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: localStorage.getItem("token"),
    };
    this.loginService = new LoginService();
  }

  handleLogin = e => {
    e.preventDefault();
    console.log(this.state.email + " " + this.state.password);
    this.loginService
      .login(this.state.email, this.state.password)
      .then(data => {
        console.log(data);
        this.setState({ token: data.data.token });
        localStorage.setItem("token", data.data.token);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  logout = e => {
    this.setState({ token: null });
    localStorage.clear();
  };

  render() {
    return (
      <div>
        Logged in : {this.state.token}
        <form onSubmit={this.handleLogin}>
          <input
            name="email"
            id="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            name="password"
            id="password"
            placeholder="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
          <button type="button" onClick={this.logout}>
            Logout
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
