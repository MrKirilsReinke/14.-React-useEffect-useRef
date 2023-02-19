import React, { useRef } from 'react';
import style from './ChangeDivColor.module.scss';
import Button from '../Button/Button';

const currentButtonCustomStyle = {
    height: '35px', 
    border: 'none',
};

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

                <Button
                    buttonStyle={currentButtonCustomStyle}
                    onClick={handleClick}
                >
                    Button
                </Button>
            </div>

            <h2>Press button to change box color to gold!</h2>
        </>
    );
};

export default ChangeDivColor;