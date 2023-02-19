import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from '../Button/Button';

const currentButtonCustomStyle = {
    border: 'none'
};

const DisabledButton = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(
        () => {
            const timer = setTimeout(() => setIsEnabled(true), 5000);
            return () => {
                clearTimeout(timer);
            };
        },
    );

    return (
        <>
            <Button
                buttonStyle={currentButtonCustomStyle}
                disabled={!isEnabled}
                onClick={() => {
                    alert('Button which was disabled first 5 seconds after page is loaded was clicked just now!');
                }} 
            >
                Button
            </Button>

            {!isEnabled ? (
                <h2>Button is disabled first 5 seconds after page is loaded!</h2>
            ) : (
                <h2>Button is enabled as first 5 seconds after page is loaded have expired!</h2>
            )}
        </>
    );
};

export default DisabledButton;