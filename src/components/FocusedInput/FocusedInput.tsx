import React from 'react';
import style from './FocusedInput.module.scss';

const FocusedInput = () => {

    return (
        <>
            <input 
                type="text" 
                name="focusedInput"
                placeholder="I'm focused..."
                className={style.input}
                autoFocus
            /> 

            <h2>Input focused once page is loaded!</h2>
        </>
    );
};

export default FocusedInput;