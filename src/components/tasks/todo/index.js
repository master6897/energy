import React from 'react';

import styles from '../index.module.css';
import Button from '../../shared/Button';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import {getTasks, putUserToTask,getTasksById, deleteTask} from '../../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';

class ToDo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          user: null,
          taskById: null,
          trashClicked: false,
          taskId: null
        };
        this.clickTrash = this.clickTrash.bind(this);
    }
    async componentDidMount(){
        this.setState({ data: await getTasks() });
        const user = JSON.parse(sessionStorage.getItem('credentials'));
        if(user === null){
            this.setState({ user: ""});
        }else{
            this.setState({ user: user});
        }
    }
    async takeTask(taskId){
        this.setState({ taskById: (await getTasksById(taskId)).data});
        const data = [...this.state.taskById[0]?.users, this.state.user?.user];
        putUserToTask(taskId,data);
        window.location.reload(true);
    }

    clickTrash(tasksId){
        this.setState({ taskId : tasksId});
        this.setState({ trashClicked: !this.state.trashClicked});
    }
    async deleteTask(taskId){
        deleteTask(taskId);
        window.location.reload(true);
    }
    render(){
        return(
            <div className={styles.TaskContainer}>
                <div className={styles.TaskContainer__List}>
                    <h1>Do zrobienia</h1>
                    {this.state.data.map((tasks) => (
                        <> {tasks.status === 0 ? 
                            <div className={styles.TaskContainer__ListTheme} key={tasks.id}>
                                {this.state.user? <>{this.state.user?.user.role.name === "Authenticated" ? 
                                <div className={styles.ManageTask}>
                                    <span><Link to={{pathname: `/updateTask/${tasks.id}`}}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Link></span>
                                    <span onClick={() => this.clickTrash(tasks.id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></span>
                                </div> : null} </> : null}
                                <h3>{tasks.Title}</h3>
                                <p>{tasks.Description}</p>
                                {this.state.taskId === tasks.id && this.state.trashClicked? 
                                <div className={styles.Buttons}><h4>Czy na pewno chcesz usunąć zadanie?</h4><Button name="TAK!" onClick={() => this.deleteTask(tasks.id)}>&nbsp;&nbsp;&nbsp;</Button><Button name="NIE!" onClick={this.clickTrash}></Button></div>
                            : <>{this.state.user ?
                                <Button name="Weź zadanie" onClick={() => this.takeTask(tasks.id)}></Button>:null}</>}
                            </div>
                        : null}
                    </>
                    ))}
                </div>
            </div>
        )
    }
}

export default withRouter(ToDo);