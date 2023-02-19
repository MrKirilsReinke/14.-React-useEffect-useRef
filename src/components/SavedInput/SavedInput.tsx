import React, { useState } from 'react';
import style from './SavedInput.module.scss';
import Button from '../Button/Button';

const customButtonStyle = {
    backgroundColor: '#adff2f',
    color: '#000000'
};

export const SavedInput = () => {
    const [newInput, setNewInput] = useState ('');
    const [items, setItems] = useState<{ id: number; value: string; }[]>([]);

    const submitItem = () => {
        if (!newInput) {
            return;
        } else {
            const item = {
                id: Math.floor(Math.random() * 100000),
                value: newInput
            };

            setItems(oldlist => [...oldlist, item]);
            // console.log(items);
            
            setNewInput('');

            document.title = `${newInput}`;
        }
    };  

    return (
        <>
            <input
                type="text" 
                id="inputTextSubmit"
                className={style.input}
                value={newInput}
                placeholder="Write something..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setNewInput(e.target.value);
                }}
            />
            <div className={style.submitInput}>
                <Button 
                    buttonStyle={customButtonStyle}
                    onClick={() => {
                        submitItem();
                        console.log(`Input changed to ${newInput}`);
                    }} 
                >
                    Submit
                </Button>
                <label 
                    htmlFor="inputTextSubmit">
                    <h2>
                        <span className={style.inputText}>
                            Submit button saves below input text. Write something!
                        </span>
                    </h2>
                </label>
            </div>
            {newInput}
            <ul>
                {items.map((item) => {
                    return (
                        <li key={item.id}>{item.value}</li>
                    );
                })}
            </ul>
        </>
    );
};

export default SavedInput;