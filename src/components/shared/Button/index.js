import React from 'react';

import styles from './index.module.css';
class Button extends React.Component{
    render(){
        return(
            <button onClick={this.props.onClick} className={styles.Button}>
          {this.props.name}
        </button>
        )
    }
}

export default Button;