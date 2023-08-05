import React, { Component } from 'react';

class Input extends Component {
    render() { 
        const { id, type, value, event } = this.props;
        return (
            <input
                type={type} 
                id={id}
                className="form-control" 
                value={value} 
                onChange={event} 
            />
        );
    }
}
 
export default Input;