import React from 'react';
import './toggle.css';
import {NavLink} from "react-router-dom";
import { faTasks, faUser, faPlus, faSignOutAlt, faSignInAlt, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          user: null,
        };
        this.toggleClass = this.toggleClass.bind(this);
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
        window.location.reload(true);
        this.history.push('/');
    }
    toggleClass(){
        let menuToggle = document.querySelector('.Toggle');
        let navigationToggle = document.querySelector('.Navigation');
        let descriptionToggle = document.querySelectorAll('.Description');
        for(let i=0; i<descriptionToggle.length; i++){
            descriptionToggle[i].classList.toggle('Active');
        }
        let svgToggle = document.querySelectorAll('svg');
        for(let i=0; i<svgToggle.length; i++){
            svgToggle[i].classList.toggle('Active');
        }
        menuToggle.classList.toggle('Active');
        navigationToggle.classList.toggle('Active');
    }
    render(){
        return(
            <div className="Navigation Active">
                <div className="Toggle" onClick={this.toggleClass}>
                    <FontAwesomeIcon icon={faBars} className="Open"> </FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTimes} className="Close"> </FontAwesomeIcon>
                    
                </div>
                <div className="Logo">
                    <p>ENERGY</p>
                    <p>LANDIA</p>
                </div>
                <hr />
                <div className="Navbar">
                    <NavLink to='/' exact activeClassName="Selected">
                        <div className="NavbarContent">
                            <span><FontAwesomeIcon icon={faTasks}> </FontAwesomeIcon></span> 
                            <span className="Description">Zadania</span>
                        </div> 
                    </NavLink>
                    {this.state.user ? 
                    <NavLink to='/userTasks' activeClassName="Selected">
                        <div className="NavbarContent">
                            <span><FontAwesomeIcon icon={faUser}> </FontAwesomeIcon></span> 
                            <span className="Description">Moje zadania</span>
                        </div>
                    </NavLink> 
                        : null}
                    
                    {this.state.user ? <>{this.state.user.user.role.name === "Authenticated" ? 
                <NavLink to='/addTask' activeClassName="Selected">
                    <div className="NavbarContent">
                        <span><FontAwesomeIcon icon={faPlus}> </FontAwesomeIcon></span> 
                        <span className="Description">Dodaj zadanie</span>
                    </div>
                </NavLink> : null
                }</> : null}
                    {this.state.user ? 
                    <NavLink to='/login' activeClassName="Selected" onClick={this.clearStorage}>
                        <div className="NavbarContent">
                            <span><FontAwesomeIcon icon={faSignOutAlt}> </FontAwesomeIcon></span> 
                            <span className="Description">Wyloguj się</span>
                        </div>
                    </NavLink>
                         : <NavLink to='/login' activeClassName="SelectedLogin">
                                <div className="NavbarContent">
                                    <span><FontAwesomeIcon icon={faSignInAlt}> </FontAwesomeIcon></span>
                                    <span className="Description">Zaloguj się</span>
                                </div>
                             </NavLink>}
                </div>
                <hr />
                <div className="Authors">
                    <p><strong>Copyright @</strong>{new Date().getFullYear()}</p>
                    <p><strong>Created by: </strong>Kamil Chrobok, Tymoteusz Łomozik, Marcin Puc</p>
                </div>
            </div>
        )
    }
}

export default Navigation;