import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import actions from '../../../actions/';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false
    };
  }

  /**
   * Handle register
   */
  _handleRegister = () => {
    this.props.history.push('/registrar');
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
    this.setState({ isLoading: true });
    event.preventDefault();
    let { email, password } = this.state;
    await actions.user.auth(email, password).then(() => {
      this.setState({ isLoading: false });
    });
  };
  render() {
    const isLoading = this.state.isLoading;
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
          type="submit"
        >
          {isLoading ? <CircularProgress size={20} color="#FFF" /> : 'Login'}
        </Button>
        <Link to="/registrar">
          <Typography
            color="secondary"
            style={{ textAlign: 'center', color: '#333', marginTop: 25 }}
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  main: {
    display: 'block',
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  avatar: {
    backgroundColor: '#FF3F00'
  },
  submit: {
    backgroundColor: '#131112',
    margimBottom: '10%'
  },
  form: {
    margin: '8%'
  }
};

export default withRouter(Login);
