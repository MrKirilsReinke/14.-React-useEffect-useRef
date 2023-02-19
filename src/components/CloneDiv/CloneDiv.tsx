import React, { ReactElement, useRef, useState } from 'react';
import style from './CloneDiv.module.scss';
import Button from '../Button/Button';

const currentButtonCustomStyle = {
    height: '35px',
    backgroundColor: '#adff2f',
    color: '#000000'
};

const CloneDiv = () => {
    const elementRef = useRef(null);
    const [elements, setElements] = useState<{id: number; value: ReactElement}[]>([]);

    const clonedDivs = () => {
        const element = <div className={style.divToClone}></div>;
        const clonedElement = React.cloneElement(element, { ref: elementRef });
        const div = {
            id: Math.floor(Math.random() * 100000),
            value: clonedElement
        };

        setElements(oldlist => [...oldlist, div]);
    };
    

    return (
        <>
            <div className={style.divToCloneContainer}>
                <div className={style.divToClone} ref={elementRef}></div>
                {elements.map(element => element.value)}
            </div>

            <Button
                buttonStyle={currentButtonCustomStyle}
                onClick={clonedDivs}
            >
               Button 
            </Button>

            <h2>Press button to clone box above!</h2>
        </>
    );
};

export default CloneDiv;