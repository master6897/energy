import React from 'react';

import styles from '../add/index.module.css';
import { withRouter } from 'react-router';
import {getTasksById, updateTask} from '../../../services/api';
import Button from '../../shared/Button';

class UpdateTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          data: [],
          title: "",
          description: "",
          num_employees:0,
        };
        this.updateTask = this.updateTask.bind(this);
        this.goBack = this.goBack.bind(this);
      }
      async componentDidMount(){
        const data = await (getTasksById(this.props.match.params.id));
        this.setState({ data : data.data});
        console.log(this.state.data[0]);

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

      updateTask(taskId,title, description, num_employees){
            updateTask(taskId, title, description, num_employees);
            this.goBack();
      }
      goBack(){
          this.props.history.goBack();
      }

    render(){
        return(
            <div className={styles.AddTaskContainer}>
                <div className={styles.AddTaskContent}>
                    <h1>DODAWANIE ZADANIA</h1>
                    <input 
                    type="text" 
                    defaultValue={this.state.data[0]?.Title}
                    onChange={this.titleHandler}></input>
                    <textarea 
                    rows="10" 
                    cols="50" 
                    defaultValue={this.state.data[0]?.Description}
                    onChange={this.descriptionHandler}></textarea>
                    <input 
                    type="number" 
                    defaultValue={this.state.data[0]?.Num_employees}
                    onChange={this.num_employeesHandler}></input>
                    <Button name="Zaktualizuj" onClick={() => 
                        this.updateTask(this.state.data[0]?.id,this.state.title,this.state.description,this.state.num_employees)}></Button>
                    <Button name="Anuluj" onClick={this.goBack}></Button>
                </div>
            </div>
        )
    }
}

export default withRouter(UpdateTask);