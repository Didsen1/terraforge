import React from "react";
import styles from "./FormInput.module.scss"

const FormInput = ({ type, register, name }: any) => {
    return (
        <>
            <input className={styles.FormInput} type={type} {...register(name)} />
        </>
    );
}


export default FormInput;