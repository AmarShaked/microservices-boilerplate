import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { loginAction } from '../../actions/auth';
import Form from '../../components/Form';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import './Login.css';

class Login extends React.Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      loading: false,
      error: null,
      redirectToReferrer: false
    }

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    this.setState({ loading: true, error: null });
    this.props.login(email, password)
      .then((res) => {
        this.setState({ loading: false, redirectToReferrer: true });
      })
      .catch((err, res) => {
        const error = err.response && err.response.data;
        this.setState({ loading: false, error });
      })
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  

  render() {
    const { email, password, loading, error, redirectToReferrer } = this.state;
    let elError;

    if (redirectToReferrer) {
      return (
        <Redirect to="/"/>
      )
    }

    if (error) {
      elError =  (
        <Alert>
          {Array.isArray(error) ? error.map((e, i) => <p key={i}>{e.msg}</p>) : <p>{error.msg}</p> }
        </Alert>
      )
    }

    return (
      <div className="Login">
        <Form>
          <p className="form-header">
            Login
          </p>
          <div className="input-section">
            <input type="email" onChange={this.handleEmailChange} placeholder="Email" value={email} />
            <input type="password" onChange={this.handlePasswordChange} placeholder="Password" value={password} />
          </div>
          <div className="help">
            {elError}
          </div>
          <Button 
            loading={loading}
            disabled={loading}
            icon="fa fa-sign-in"
            onClick={this.handleLoginSubmit}
          >
            Login
          </Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    login: bindActionCreators(loginAction, dispatch),
});

export default connect(null, mapDispatchToProps)(Login);