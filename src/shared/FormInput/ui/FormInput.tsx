import React from "react";
import styles from "./FormInput.module.scss"

const FormInput = ({ type, name, register, rules, error }: any) => {
    return (
        <>
            <input
                className={styles.FormInput}
                type={type}
                {...register(name, rules)}
            />
        </>
    );
}


export default FormInput;