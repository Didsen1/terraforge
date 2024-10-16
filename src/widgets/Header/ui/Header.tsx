import React from "react";
import Button from "../../../shared/Button";
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.Header}>
            <button>Главная</button>
            <div>
                <Button type={"submit"} ButtonText={"Войти"}/>
                <Button type={"submit"} ButtonText={"Регистрация"}/>
            </div>
        </header>
    )
}

export default Header