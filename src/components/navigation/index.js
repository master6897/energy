import React from 'react';
import styles from './index.module.css';
import {NavLink} from "react-router-dom";

class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          user: null,
        };
    }
    componentDidMount(){
        const user = JSON.parse(sessionStorage.getItem('credentials'));
        if(user === null){
            this.setState({ user: ""});
        }else{
            this.setState({ user: user});
        }
    }

    clearStorage(){
        sessionStorage.clear();
    }
    render(){
        return(
            <div className={styles.Navigation}>
                <div className={styles.Logo}>
                    <p>ENERGY</p>
                    <p>LANDIA</p>
                </div>
                <hr />
                <div className={styles.Navbar}>
                    <NavLink to='/' exact activeClassName={styles.Selected}>Zadania</NavLink>
                    {this.state.user ? <>{this.state.user.user.role.name === "Authenticated" ? 
                <NavLink to='/addTask' activeClassName={styles.Selected}>Dodaj zadanie</NavLink> : null
                }</> : null}
                    <NavLink to='/login' activeClassName={styles.Selected}>{this.state.user ? <span onClick={this.clearStorage}>Wyloguj się</span> : <span>Zaloguj się</span>}</NavLink>
                </div>
                <hr />
                <div className={styles.Authors}>
                    <p><strong>Copyright @</strong>{new Date().getFullYear()}</p>
                    <p><strong>Created by: </strong>Kamil Chrobok, Tymoteusz Łomozik, Marcin Puc</p>
                </div>
            </div>
        )
    }
}

export default Navigation;