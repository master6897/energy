import React from 'react';

import styles from './index.module.css';
import {putTask} from '../../../services/api';

class AddTask extends React.Component{
    constructor(){
        super();
        this.state = {
          title: "",
          description: "",
          num_employees:0,
        };
        this.addTasks = this.addTasks.bind(this);
      }
      titleHandler = (evt) =>{
          this.setState({ title: evt.target.value});
      }
      descriptionHandler = (evt) =>{
          this.setState({ description: evt.target.value});
      }
      num_employeesHandler = (evt) =>{
          this.setState({ num_employees: evt.target.value});
      }

      addTasks(){
        putTask(this.state.title, this.state.description, this.state.num_employees);
        this.props.history.push('/');
        window.location.reload(true);
      }

    render(){
        const {title,num_employees} = this.state;
        return(
            <div className={styles.AddTaskContainer}>
                <div className={styles.AddTaskContent}>
                    <h1>DODAWANIE ZADANIA</h1>
                    <input 
                    type="text" 
                    placeholder="Tytuł zadania"
                    onChange={this.titleHandler}></input>
                    <textarea 
                    rows="10" 
                    cols="50" 
                    placeholder="Opis zadania"
                    onChange={this.descriptionHandler}></textarea>
                    <input 
                    type="number" 
                    placeholder="Ilość osób"
                    onChange={this.num_employeesHandler}></input>
                    {title === "" || num_employees < 0 ? (
                        <input type="button" value="Dodaj zadanie" style={{visibility: "hidden"}}></input>
                    ) : (
                        <input type="button" value="Dodaj zadanie" onClick={this.addTasks}></input>
                    )}
                </div>
            </div>
        )
    }
}

export default AddTask;