import React from "react";
import Button from "../../../shared/Button";
import LinkElement from "../../../shared/LinkElement";
import styles from "./Form.module.scss"

const Form = ({ formButtonText, formLinkText, formLinkPath, isValid, onSubmit, children }: any) => {
    return (
        <form className={styles.FormWrapper__Form} onSubmit={onSubmit} >
            {
                children
            }
            <div className={styles.FormWrapper__ButtonWrapper}>
                <Button type={"submit"} ButtonText={formButtonText} disabled={!isValid} />
                <LinkElement to={formLinkPath} LinkText={formLinkText} />
            </div>
        </form>
    )
}

export default Form;