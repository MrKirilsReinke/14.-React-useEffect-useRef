import React, { useEffect, useState } from 'react';
import style from './CountButton.module.scss';

const CountButton = () => {
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(0);

    useEffect (() => {
        setResult(count * 2);
    }, [count] );

    return (
        <>
            <button
                type="button"
                className={style.countBtn}
                onClick={() => {
                    setCount(count + 1);
                    console.log(`Changing count to ${count + 1}`);
                }}
            >
                Count: {count}
            </button>

            <h2>Each time you press on the count button, count increases by 1, and result (count x 2) is shown below</h2>

            <div className={style.countContainer}>{result}</div>

        </>
    );
};

export default CountButton;
