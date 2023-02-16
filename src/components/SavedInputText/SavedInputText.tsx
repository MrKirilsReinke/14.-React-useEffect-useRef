import React from 'react';
import style from './SavedInputText.module.scss';
import SavedInput from '../SavedInput/SavedInput';

const SavedInputText = () => {

    return (
        <>
            {items.map((item) => {
                return (
                    <li key={item.id}>{item.value}<button onClick={() => deletItem(item.id)}>✖️</button></li>
                );
            })}
        </>
    );
};

export default SavedInputText;