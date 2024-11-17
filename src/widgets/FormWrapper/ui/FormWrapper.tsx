import React from "react";
import styles from './FormWrapper.module.scss'

const FormWrapper = ({ formTitleText, children }: any) => {
    return (
        <section className={styles.FormWrapper}>
            <h1 className={styles.FormWrapper__title}>{formTitleText}</h1>
            {
                children
            }
        </section>
    )
}

export default FormWrapper;