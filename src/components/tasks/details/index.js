import React from 'react';

import styles from './index.module.css';
import {getTasksById} from '../../../services/api';
import Button from '../../shared/Button';
import {withRouter} from 'react-router-dom';

class Details extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: []
        };
        this.goBack = this.goBack.bind(this);
    }
    async componentDidMount(){
        this.setState({ data: (await getTasksById(this.props.match.params.id)).data});
    }

    goBack(){
        this.props.history.goBack();
    }
    render(){
        return(
            <div className={styles.DetailsPopUp}>
                <div className={styles.DetailsData}>
                    <h1>{this.state.data[0]?.Title}</h1>
                    <p>{this.state.data[0]?.Description}</p>
                    <h3>Pracownicy wykonujący zadanie: </h3>
                    <table>
                        <tr>
                            <th>Imię pracownika</th>
                            <th>Data podjęcia zadania</th>
                            <th>Data zakończenia zadania</th>
                        </tr>
                    {this.state.data[0]?.users.map((userTask) =>(
                        <tr>
                            <td>{userTask.username}</td>
                            <td>{this.state.data[0]?.date}</td>
                            {this.state.data[0]?.finishDate === null? 
                                <td>Jeszcze nie ukończono</td> :
                                <td>{this.state.data[0]?.finishDate}</td>   
                            }
                        </tr>
                    ))}
                    </table>
                        <Button name="Wróć" onClick={this.goBack}></Button>
                </div>
            </div>
        )
    }
}

export default withRouter(Details);