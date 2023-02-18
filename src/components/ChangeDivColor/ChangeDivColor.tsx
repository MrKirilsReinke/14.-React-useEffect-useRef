import React, { useRef } from 'react';
import style from './ChangeDivColor.module.scss';

const ChangeDivColor = () => {
    const ref = useRef<HTMLDivElement>(null);


    const handleClick = () => {
        if (ref.current) {
            ref.current.style.backgroundColor = 'gold';
        }     
    };


    return (
        <>
            <div className={style.changeColorContainer}>
                <div 
                    className={style.changeColor}
                    ref={ref}
                >
                </div>

                <button 
                    className={style.changeColorBtn}
                    onClick={handleClick}
                >
                    Button
                </button>
            </div>

            <h2>Press button to change box color to gold!</h2>
        </>
    );
};

export default ChangeDivColor;