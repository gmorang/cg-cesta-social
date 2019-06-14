import React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import actions from "../../../actions/";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  /**
   * Handle register
   */
  _handleRegister = () => {
    this.props.history.push("/registrar");
  };

  _handleEmail = text => {
    this.setState({
      email: text.currentTarget.value
    });
  };

  _handlePassword = text => {
    this.setState({
      password: text.currentTarget.value
    });
  };
  _handleLogIn = async event => {
    event.preventDefault();
    let { email, password } = this.state;
    try {
      actions.user.auth(email, password);
    } catch (e) {
      window.alert(e.message);
    }
  };
  render() {
    return (
      <form style={styles.form}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            value={this.state.email}
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={this._handleEmail}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={this.state.password}
            onChange={this._handlePassword}
          />
        </FormControl>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          style={styles.submit}
          onClick={this._handleLogIn}
        >
          Login
        </Button>
        <Link to="/registrar">
          <Typography
            color="secondary"
            style={{ textAlign: "center", color: "#333", marginTop: 25 }}
          >
            Não possui cadastro? Cadastre-se
          </Typography>
        </Link>
      </form>
    );
  }
}
const styles = {
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  main: {
    display: "block",
    width: 400,
    marginLeft: "auto",
    marginRight: "auto"
  },
  avatar: {
    backgroundColor: "#FF3F00"
  },
  submit: {
    backgroundColor: "#131112",
    margimBottom: "10%"
  },
  form: {
    margin: "8%"
  }
};

export default withRouter(Login);
