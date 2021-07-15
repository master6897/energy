import React from 'react';

import styles from '../index.module.css';
import Button from '../../shared/Button';
import {getTasks} from '../../../services/api';

class Done extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          user: null
        };
    }
    async componentDidMount(){
        this.setState({ data: await getTasks() });
    }
    render(){
        return(
            <div className={styles.TaskContainer}>
                <div className={styles.TaskContainer__List}>
                    <h1>Zakończone</h1>
                    {this.state.data.map((tasks) => {
                        <>{tasks.status == 2 ? 
                            <div className={styles.TaskContainer__ListTheme} key={tasks.id}>
                            <h3>{tasks.Title}</h3>
                            <p>{tasks.Description}</p>
                            <Button name="Szczegóły"></Button>
                        </div>
                        :null
                        }
                        </>
                    })}
                </div>
            </div>
        )
    }
}

export default Done;