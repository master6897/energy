import React from "react";
import styles from "./index.module.css";

import {authentication} from "../../services/authentication";


class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: "",
      user:null,
      clicked: false,
      passed: null
    };
    this.getAuth = this.getAuth.bind(this);
  }
  passwordHandler = (evt) => {
    this.setState({ password: evt.target.value });
  };
  usernameHandler = (evt) => {
    this.setState({ username: evt.target.value });
  };
  async getAuth(){
      this.setState({clicked: true});
      const user = await authentication(this.state.username,this.state.password);
      this.setState({user: user});
      if(user){
        this.setState({ passed: true});
        this.props.history.push('/');
        window.location.reload(true);
      }else{
        this.setState({ passed: false});
      }
  }
  render() {
    return (
      <div className={styles.Login}>
        <div className={styles.Login__Theme}>
            <h1>LOGOWANIE</h1>
          <input type="text" placeholder="Nazwa użytkownika" onChange={this.usernameHandler}></input>
          <input type="password" placeholder="Hasło" onChange={this.passwordHandler}></input>
          {this.state.clicked ? <> {this.state.passed ? <span style={{color:"green"}}>Pomyślnie zalogowano!</span> : <span style={{color:"red"}}>Niepoprawna nazwa użytkownika lub hasło</span>}</> : null}
          <input type="button" value="Zaloguj" onClick={this.getAuth}></input>
        </div>
      </div>
    );
  }
}

export default Login;
