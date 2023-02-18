import React, { useState } from 'react';
import { useEffect } from 'react';
import style from './DisabledButton.module.scss';

const DisabledButton = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(
        () => {
            const timer = setTimeout(() => setIsEnabled(true), 5000);
            // this will clear Timeout
            // when component unmount like in willComponentUnmount
            // and show will not change to true
            return () => {
                clearTimeout(timer);
            };
        },
        // useEffect will run only one time with empty []
        // if you pass a value to array,
        // like this - [data]
        // than clearTimeout will run every time
        // this value changes (useEffect re-run)
        []
    );

    return (
        <>
            <button
                type="button"
                className={style.disabledButton}
                disabled={!isEnabled}
                onClick={() => {
                    alert('Button which was disabled first 5 seconds after page is loaded was clicked just now!');
                }}
            >
                Button
            </button>

            {!isEnabled ? (
                <h2>Button is disabled first 5 seconds after page is loaded!</h2>
            ) : (
                <h2>Button is enabled as first 5 seconds after page is loaded have expired!</h2>
            )}
        </>
    );
};

export default DisabledButton;