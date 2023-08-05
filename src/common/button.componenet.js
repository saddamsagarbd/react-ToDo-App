import React, { Component } from 'react';

class Button extends Component {
    
    render() { 
        // object destructuring
        const { event, className, disabled, text } = this.props ;

        return (
            <button 
                onClick={event}
                type="button" 
                className={className}
                disabled={disabled}
            >
                {text}
            </button>
        );
    }
}
 
export default Button;