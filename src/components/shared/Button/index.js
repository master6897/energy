import React from 'react';

import './index.module.css';
class Button extends React.Component{
    render(){
        return(
            <input type="button" value={this.props.name}></input>
        )
    }
}

export default Button;