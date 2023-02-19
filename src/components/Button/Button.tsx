import React, { ReactNode } from 'react';
import style from './Button.module.scss';

type ButtonProps = {
    children: ReactNode;
    type?: 'button' | 'submit';
    onClick?: () => void;
    buttonStyle?: React.CSSProperties;
    disabled?: boolean;
}

const Button = ({children, type = 'button', onClick, buttonStyle = {}, disabled = false}: ButtonProps) => {

    return (
        <button
            type={type}
            onClick={onClick}
            className={style.button}
            style={buttonStyle}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;  





// import React, { ReactNode } from 'react';
// import style from './Button.module.scss';

// type ButtonProps = {
//     children: ReactNode;
//     type?: 'button' | 'submit';
//     onClick: () => void;
//     buttonStyle?: React.CSSProperties;
// }

// // type ExtendedButtonProps = ButtonProps & {
// //     width?: string;
// //     height?: string;
// //     border?: string;
// //     backgroundColor?: string;
// //     fontSize?: string;
// //     color?: string;
// // }

// const Button = ({
//     // children, 
//     // type='button', 
//     // onClick, width='100px', 
//     // height='40px', 
//     // border='1px solid #002127', 
//     // backgroundColor='#808080', 
//     // fontSize='1rem', 
//     // color='#FFFFFF'  

//     children,
//     type = 'button', 
//     onClick,
//     buttonStyle = {}
// }: ButtonProps) => {

//     // const buttonStyle = {
//     //     width,
//     //     height,
//     //     border,
//     //     backgroundColor,
//     //     fontSize,
//     //     color
//     // };

//     return (
//         <button
//             type={type}
//             onClick={onClick}
//             className={style.button}
//             style={buttonStyle}
//         >
//             {children}
//         </button>
//     );
// };

// export default Button;  










{/* <button 

type="button"
className={style.submitBtn}

onClick={() => {
    submitItem();
    console.log(`Input changed to ${newInput}`);
}}
>
Submit
</button>  */}

{/* <button 

type="button"
className={style.changeColorBtn}

onClick={handleClick}
>
Button
</button> */}

{/* <button 

type="button"
className={style.divToCloneBtn}

onClick={clonedDivs}
>
Button
</button> */}

{/* <button

type="button"
className={style.disabledButton}

disabled={!isEnabled}
onClick={() => {
    alert('Button which was disabled first 5 seconds after page is loaded was clicked just now!');
}}
>
Button
</button> */}

{/* <button

type="button"
className={style.corneredDivBtn}

onClick={handleClick}
>
Button
</button> */}

{/* <button

type="button"
className={style.countBtn}

onClick={() => {
    setCount(count + 1);
    console.log(`Changing count to ${count + 1}`);
}}
>
Count: {count}
</button> */}

{/* <form className={style.DropDownContainer}>
<button
    type="button"
    className={style.addChosenColorBtn}

    onClick={handleAddColor}
>
    +
</button> */}







