import React from 'react';
import { getTasks } from '../../../services/api';
import { Link } from 'react-router-dom';
import { finishTask } from '../../../services/api';

import styles from './index.module.css';

class UserTasks extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user: null,
            tasks: null,
            taskId: null,
            clicked: false
        }
    }

    async componentDidMount(){
        this.setState({ tasks: (await getTasks())});
        this.setState({ user: JSON.parse(sessionStorage.getItem('credentials'))});

    }
    finishUserTask(idTask){
        finishTask(idTask);
        window.location.reload(true);
        this.props.history.push('/userTasks');
    }
    render(){
        return( 
            <div className={styles.UserTasksContainer}>
                <div className={styles.UserTasksData}>
                    <h1>Moje zadania</h1>
                    <table>
                        <tr>
                            <th>Tytuł</th>
                            <th>Status</th>
                            <th>Opis</th>
                            <th>Akcje</th>
                        </tr>
                        
                        {this.state.tasks?.map((userTasks) => (
                            <>
                            {userTasks?.users.map((taskUsers) => (
                                <>
                                {taskUsers.username === this.state.user?.user.username ?
                                    <tr>
                                        <td>{userTasks.Title}</td>
                                        <td>
                                            {userTasks.status === 1 ? "W trakcie" : "Zakończono"}
                                        </td>
                                        <td>{userTasks.Description}</td>
                                        {userTasks.status === 1 ? <td>
                                            <button onClick={() => this.finishUserTask(userTasks.id)}>Zakończ</button>
                                        </td> : <td><button><Link to={{ pathname:`details/${userTasks.id}`}}>Szczegóły</Link></button></td>}
                                    </tr>
                                    : null
                                }
                                </>
                            ))}
                            </>
                        ))}
                    </table>
                </div>
            </div>
        )
    }
}

export default UserTasks;