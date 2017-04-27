import React from 'react';
import Form from '../../components/Form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { signupAction } from '../../actions/auth';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import './Signup.css';

class Signup extends React.Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      loading: false,
      error: null,
      redirectToReferrer: false
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
  }

  handleSignupSubmit(e) {
    e.preventDefault();
    const { email, password, confirmPassword } = this.state;

    this.setState({ loading: true, error: null });
    this.props.signup(email, password, confirmPassword)
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

  handlePasswordConfirmChange(e) {
    this.setState({confirmPassword: e.target.value})
  }

  render() {

    const { email, password, confirmPassword, loading, error, redirectToReferrer } = this.state;
    let elError;

    if (redirectToReferrer) {
      return (
        <Redirect to="/profile"/>
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
      <div className="Signup">
        <Form>
          <p className="form-header">
            Signup
          </p>
          <div className="input-section">
            <input type="email" onChange={this.handleEmailChange} placeholder="Email" value={email} />
            <input type="password" onChange={this.handlePasswordChange} placeholder="Password" value={password} />
            <input type="password" onChange={this.handlePasswordConfirmChange} placeholder="Confirm password" value={confirmPassword} />
            <div className="help">
              {elError}
            </div>        
          </div>
          <Button onClick={this.handleSignupSubmit} type="submit" loading={loading} disabled={loading} icon="fa fa-user-plus">Signup</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    signup: bindActionCreators(signupAction, dispatch),
});

export default connect(null, mapDispatchToProps)(Signup);