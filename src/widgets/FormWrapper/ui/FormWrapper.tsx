import React from "react";
import Register from "../../../features/Register";
import Button from "../../../shared/Button";
import styles from './FormWrapper.module.scss'

const FormWrapper = () => {
    return (
        <section className={styles.FormWrapper}>
            <form className={styles.FormWrapper__Form}>
                <Register />
            </form>
            <div className={styles.FormWrapper__ButtonWrapper}>
                <Button type={"submit"} ButtonText={"Зарегистрироваться"} />
                <a href="/">Ну тут текст<br />
                    для перехода <br />
                    между формами <br />
                    регистрации и входа</a>
            </div>
        </section>
    )
}

export default FormWrapper;