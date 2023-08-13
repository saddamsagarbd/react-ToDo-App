import React from 'react';

const Form = (props) => {
    const { classN, onSubmit, children } = props;
    return ( 
        <form className={ classN } onSubmit={ onSubmit }>
            { children }
        </form>
    );
}

export default Form;