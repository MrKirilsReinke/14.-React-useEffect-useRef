import React, { ReactElement, useRef, useState } from 'react';
import style from './CloneDiv.module.scss';

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

            <button 
                className={style.divToCloneBtn}
                onClick={clonedDivs}
            >
                Button
            </button>

            <h2>Press button to clone box above!</h2>
        </>
    );
};

export default CloneDiv;