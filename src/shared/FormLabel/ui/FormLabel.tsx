import React from "react";
import styles from "./FormLabel.module.scss"

const FormLabel = ({ children, htmlFor, labelText }: any) => {
    return (
        <>
            <label className={styles.FormLabel} htmlFor={htmlFor}>
                {labelText}
                {
                    children
                }
            </label>
        </>
    )
}

export default FormLabel