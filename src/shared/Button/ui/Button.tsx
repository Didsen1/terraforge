import React from "react";
import styles from "./Button.module.scss"

const Button = ({ ButtonText, type }: any) => {
    return (
        <button className={styles.button} type={type} name={ButtonText}>{ButtonText}</button>
    )
}

export default Button