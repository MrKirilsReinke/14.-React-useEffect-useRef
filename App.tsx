import React from 'react';
import { useEffect } from 'react';
import style from  './App.module.scss';
import FocusedInput from './src/components/FocusedInput/FocusedInput';
import SavedInput from './src/components/SavedInput/SavedInput';
import DisabledButton from './src/components/DisabledButton/DisabledButton';
import CountButton from './src/components/CountButton/CountButton';
import DropDown from './src/components/DropDown/DropDown';
import ChangeDivColor from './src/components/ChangeDivColor/ChangeDivColor';
import CloneDiv from './src/components/CloneDiv/CloneDiv';
import CorneredDiv from './src/components/CorneredDiv/CorneredDiv';

function App() {

    useEffect(() => {
        console.log('First render');
    }, []);

    return (
        <div className={style.mdContainer}>
            <FocusedInput />
            <SavedInput />
            <DisabledButton />
            <CountButton />
            <DropDown />
            <ChangeDivColor />
            <CloneDiv />
            <CorneredDiv />
        </div>
    );
}

export default App;
