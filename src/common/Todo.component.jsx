import React, { Component } from 'react';

import Button from './button.componenet';

class Todo extends Component {
    state = {  } 
    render() {
        const {todo, key} = this.props;
        return (
            <>
                <div className="d-flex mt-5 border" key={key}>
                    <h3 className='mx-2 text-primary'>{todo}</h3>
                    <Button
                        text="Edit"
                        className="btn btn-primary mx-2 btn-md"
                    />
                    <Button
                        text="Delete"
                        className="btn btn-danger btn-md"
                    />
                </div>
            </>
        );
    }
}
 
export default Todo;