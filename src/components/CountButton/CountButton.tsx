import React, { useEffect, useState } from 'react';
import style from './CountButton.module.scss';
import Button from '../Button/Button';

const currentButtonCustomStyle = {
    backgroundColor: '#adff2f',
    color: '#000000'
};

const CountButton = () => {
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(0);

    useEffect (() => {
        setResult(count * 2);
    }, [count] );

    return (
        <>
            <Button
                buttonStyle={currentButtonCustomStyle}
                onClick={() => {
                    setCount(count + 1);
                    console.log(`Changing count to ${count + 1}`);
                }}
            >
                Count: {count}
            </Button>

            <h2>Each time you press on the count button, count increases by 1, and result (count x 2) is shown below</h2>

            <div className={style.countContainer}>{result}</div>

        </>
    );
};

export default CountButton;
