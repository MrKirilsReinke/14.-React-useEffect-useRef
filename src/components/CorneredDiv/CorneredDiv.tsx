import React, { useRef } from 'react';
import style from './CorneredDiv.module.scss';
import Button from '../Button/Button';

const currentButtonCustomStyle = {
    border: 'none',
};

const CorneredDiv = () => {
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (ref.current) {
            ref.current.style.position = 'absolute';
            ref.current.style.top = '0';
            ref.current.style.right = '0';
        }     
    };

    return (
        <>
            <div className={style.corneredDivContainer}>
                <div className={style.corneredDiv} ref={ref}></div>
            </div>

            <Button
                buttonStyle={currentButtonCustomStyle}
                onClick={handleClick}
            >
                Button
            </Button>

            <h2>Press button to send box above in top rigth corner!</h2>
        </>
    );
};

export default CorneredDiv;