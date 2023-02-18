import React, { useEffect, useState } from 'react';
import style from './DropDown.module.scss';

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
                <button
                    type="button"
                    className={style.addChosenColorBtn}
                    onClick={handleAddColor}
                >
                    +
                </button>

                <select 
                    className={style.dropChosenColorBtn}
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