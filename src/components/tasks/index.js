import React from 'react';
import styles from './index.module.css';

import ToDo from './todo';
import During from './during';
import Done from './done';

class Tasks extends React.Component{
    render(){
        return(
            <div className={styles.Tasks}>
                <div className={styles.TasksContainer}>
                    <ToDo />
                    <During />
                    <Done />
                </div>
            </div>
        )
    }
}

export default Tasks;