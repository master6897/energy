import React from 'react';

import styles from '../index.module.css';
import {getTasks} from '../../../services/api';
import { Link } from 'react-router-dom';

class During extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          user: null,
          clicked: false
        };
        this.showDetails = this.showDetails.bind(this);
    }
    async componentDidMount(){
        this.setState({ data: await getTasks() });
    }

    showDetails(){
        this.setState({ clicked: !this.state.clicked});
    }
    render(){
        return(
            <div className={styles.TaskContainer}>
                <div className={styles.TaskContainer__List}>
                    <h1>W trakcie</h1>
                    {this.state.data.map((tasks) => (
                        <>{tasks.status === 1 ? 
                            <div className={styles.TaskContainer__ListTheme} key={tasks.id}>
                                <h3>{tasks.Title}</h3>
                                <p>{tasks.Description}</p>
                                <div className={styles.TaskContainerUsers}>
                                    <p>Liczba pracowników: </p>
                                    {tasks.users.length}
                                </div>
                                <Link to={{ pathname:`details/${tasks.id}` }} key={tasks.id}>Szczegóły</Link>
                        </div>
                        :null
                        }
                        </>
                    ))}
                </div>
            </div>
        )
    }
}

export default During;