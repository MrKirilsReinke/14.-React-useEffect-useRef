import React, { useEffect, useState } from 'react';
import style from './DropDown.module.scss';
import Button from '../Button/Button';

const currentButtonCustomStyle = {
    width: '50px',
    backgroundColor: '#FFFFFF',
    fontSize: '1.2rem',
    color: '#000000'
};

type Color = { 
    value: string
}

const DropDown = () => {
    const [chosenColor, setChosenColor] = useState<Color>({ value: '' });
    const [chosenColors, setChosenColors] = useState<Color[]>([]);

    const handleAddColor = () => {
        if (chosenColor.value) {
            setChosenColors([...chosenColors, chosenColor]);
            setChosenColor({ value: '' });
        }
    };

    return (
        <>
            <form className={style.DropDownContainer}>
                <Button
                    buttonStyle={currentButtonCustomStyle}
                    onClick={handleAddColor}
                >
                    +
                </Button>
                <select 
                    className={style.dropChosenColor}
                    value={chosenColor.value}
                    onChange={(event) => setChosenColor({ value: event.target.value })}
                >
                    <option value="" disabled>Choose color</option>
                    <option value="yellow">Yellow</option>
                    <option value="purple">Purple</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                </select>
            </form>

            <h2>{'Choose color and press "+" to post new color below!'}</h2>

            <div className={style.coloredDivContainer}>
                {chosenColors.map((color) => {
                    return (
                        <div 
                            className={style.coloredDiv}
                            key={color.value}
                            style={{ backgroundColor: color.value }}
                        >
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default DropDown;