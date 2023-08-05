import React, { Component } from 'react';

import Button from './button.componenet';

class Counter extends Component {
    // constructor(){
        // super();

        // this.increament = this.increament.bind(this);
        // this.decreament = this.decreament.bind(this);
    // }

    render() { 
        const { index, onIncreament, onDecreament, onReset, onDelete, number } = this.props;
        return (  
            <div className='d-flex'>  
                <Button
                    event={() => onReset(index)}
                    className="btn btn-warning mx-2"
                    text="Reset"
                />

                <Button
                    event={() => onDecreament(index)}
                    className="btn btn-secondary mx-2"
                    text="Dec (-)"
                    disabled={number === 0}
                />

                <span className="my-1">{ number }</span>

                <Button
                    event={() => onIncreament(index)}
                    className="btn btn-success mx-2"
                    text="Inc (+)"
                />

                <Button
                    event={() => onDelete(index)}
                    className="btn btn-danger mx-2"
                    text="Delete"
                />
            </div>
        );
    }
}
 
export default Counter;