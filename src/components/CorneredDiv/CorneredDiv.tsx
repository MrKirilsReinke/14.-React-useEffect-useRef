import React, { useRef } from 'react';
import style from './CorneredDiv.module.scss';

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

            <button
                type="button"
                className={style.corneredDivBtn}
                onClick={handleClick}
            >
                Button
            </button>

            <h2>Press button to send box above on the left side!</h2>
        </>
    );
};

export default CorneredDiv;