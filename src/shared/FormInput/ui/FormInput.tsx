import React from "react";
import useValidation from "../../hooks/useValidation";
import styles from "./FormInput.module.scss"

const FormInput = ({ type, name, onBlur, onChange, required, minLength }: any) => {

    return (
        <>
            <input className={styles.FormInput} minLength={minLength} type={type} name={name} onBlur={onBlur} onChange={onChange} required={required}></input>
            {/* <span className="sign__error">{errors.name}</span> */}
        </>
    )
}

export default FormInput;