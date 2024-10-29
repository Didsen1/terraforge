import React from "react";
import styles from "./Button.module.scss"

const Button = ({ ButtonText, type, disabled, onClick }: any) => {
    return (
        <button className={disabled ? `${styles.button} ${styles.button_disabled}` : `${styles.button}`} onClick={onClick} type={type} name={ButtonText} disabled={disabled}>{ButtonText}</button>
    )
}


export default Button