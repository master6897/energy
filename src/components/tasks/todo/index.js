import React from 'react';

import styles from '../index.module.css';
import Button from '../../shared/Button';
import {getTasks, putUserToTask,getTasksById} from '../../../services/api';

class ToDo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          user: null,
          taskById: null
        };
    }
    async componentDidMount(){
        this.setState({ data: await getTasks() });
        const user = JSON.parse(sessionStorage.getItem('credentials'));
        if(user === null){
            this.setState({ user: ""});
        }else{
            this.setState({ user: user});
        }
        console.log(this.state.data);
    }
    async takeTask(taskId, user){
        this.setState({ taskById : await getTasksById(taskId) });
        const users = [...this.state.taskById[0].users, user];
        putUserToTask(taskId,users);
    }
    render(){
        return(
            <div className={styles.TaskContainer}>
                <div className={styles.TaskContainer__List}>
                    <h1>Do zrobienia</h1>
                    {this.state.data.map((tasks) => (
                        <> {tasks.status === 0 ? 
                            <div className={styles.TaskContainer__ListTheme} key={tasks.id}>
                                <h3>{tasks.Title}</h3>
                                <p>{tasks.Description}</p>
                                {this.state.user ?<Button name="Weź zadanie" onClick={this.takeTask(tasks.id,this.state.user.user)}></Button>:null}
                            </div>
                        : null}
                    </>
                    ))}
                </div>
            </div>
        )
    }
}

export default ToDo;