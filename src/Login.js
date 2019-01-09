import React, { Component } from 'react';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.props.handleLogin) {
      this.props.handleLogin(this.state);
    }
  };


  signIn(e) {
    //alert('Hiiiiii ' + this.state.email);
    if (this.state.email === 'go2prashant@gmail.com' && this.state.password === 'Passw0rd'){
      alert('Correct Credentials!!!!!!!!!!!');
      return true;
    }else{
      alert('Wrong Id or Password!!!!!!!!!!!');
      return false;
    }
    //alert('Hiiiiii' + document.getElementById('email').value() + ' ::: ' + document.getElementById('password').value());

  }

  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={e => this.setState({ email: e.target.value})} />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={e => this.setState({ password: e.target.value})} />
        </fieldset>
        <div className="actions">
          <button id="signInBtn" type="submit" onClick={e => this.signIn()}>Login</button>
        </div>
      </form>
    )
  }

    

}