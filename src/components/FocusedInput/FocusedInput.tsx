import React, { useRef } from 'react';
import { useEffect } from 'react';
import style from './FocusedInput.module.scss';

const FocusedInput = () => {
    const focusedInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (focusedInput.current) {
            focusedInput.current.focus();
        }
    }, []);

    return (
        <>
            <input 
                type="text" 
                name="focusedInput"
                placeholder="I'm focused..."
                className={style.input}
                ref={focusedInput}
            /> 

            <h2>This input field focused once page is loaded!</h2>
        </>
    );
};

export default FocusedInput;