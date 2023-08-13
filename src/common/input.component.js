import React, { Component } from 'react';

class Input extends Component {
    render() { 
        const { id, type, value, event, className, style } = this.props;
        return (
            <input
                type={type} 
                id={id}
                className={ className }
                value={value} 
                onChange={event} 
                style={ style }
            />
        );
    }
}
 
export default Input;