import React from 'react';
import style from  './App.module.scss';
import FocusedInput from './src/components/FocusedInput/FocusedInput';
import SavedInput from './src/components/SavedInput/SavedInput';
import DisabledButton from './src/components/DisabledButton/DisabledButton';

function App() {

    return (
        <div className={style.mdContainer}>
            <FocusedInput />
            <SavedInput />
            <DisabledButton />
        </div>
    );
}

export default App;
