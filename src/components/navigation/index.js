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
    componentDidUpdate(){
        const user = JSON.parse(sessionStorage.getItem('credentials'));
    }

    clearStorage(){
        sessionStorage.clear();
        window.location.reload(true);
        this.history.push('/');
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
                    {this.state.user ? <NavLink to='/userTasks' activeClassName={styles.Selected}>Moje zadania</NavLink> : null}
                    
                    {this.state.user ? <>{this.state.user.user.role.name === "Authenticated" ? 
                <NavLink to='/addTask' activeClassName={styles.Selected}>Dodaj zadanie</NavLink> : null
                }</> : null}
                    {this.state.user ? <NavLink to='/login' activeClassName={styles.Selected} onClick={this.clearStorage}>Wyloguj się</NavLink> : <NavLink to='/login'>Zaloguj się</NavLink>}
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