import React, { Component } from 'react';

class Label extends Component {
    render() { 
        const { labelFor, label } = this.props;
        return (
            <label 
                for={labelFor}
                className="form-label">
                    {label}
            </label>
        );
    }
}
 
export default Label;