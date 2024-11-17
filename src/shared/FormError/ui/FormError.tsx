import React from "react";
import styles from "./FormError.module.scss";

const FormError = ({ errors, errorName }: { errors: any; errorName: string }) => {
    const error = errors[errorName];
    
    return (
        <div className={styles.FormErrorsWrapper}>
            {error && <p className={styles.FormErrors}>{error.message || "Ошибка!"}</p>}
        </div>
    );
};

export default FormError;
