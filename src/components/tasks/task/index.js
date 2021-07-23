import React from 'react';

import styles from './index.module.css';
import Button from '../../shared/Button';
import { withRouter } from 'react-router';
import {putUserToTask,getTasksById} from '../../../services/api';

class Task extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          user: null,
          taskById: null
        };
        this.goBack = this.goBack.bind(this);
        this.takeTask = this.takeTask.bind(this);
    }
    async componentDidMount(){
        this.setState({ taskById: (await getTasksById(this.props.match.params.id)).data});
        const user = JSON.parse(sessionStorage.getItem('credentials'));
        if(user === null){
            this.setState({ user: ""});
        }else{
            this.setState({ user: user});
        }
    }
    goBack(){
        this.props.history.goBack();
    }
    takeTask(dataTask){
        putUserToTask(this.props.match.params.id,dataTask);
        this.props.history.goBack();
    }
    render(){
        const {taskById} = this.state;
        const {user} = this.state;
        return(
            <div className={styles.Task}>
                <Button name="Weź zadanie" onClick={()=>{
                    const dataTask = [...taskById[0]?.users, user?.user];
                    this.takeTask(dataTask)}}></Button>
            </div>
        )
    }
}

export default withRouter(Task);