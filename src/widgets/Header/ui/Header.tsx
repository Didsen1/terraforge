import React from "react";
import LinkElement from "../../../shared/LinkElement";
import { useAppSelector, useAppDispatch } from "../../../app/store/hooks";
import { isLogin } from "../../../entities/user/model/userSlice";
import { username } from "../../../entities/user/model/userSlice";
import { logout } from "../../../entities/user/model/userSlice";
import Button from "../../../shared/Button";
import styles from './Header.module.scss'

const Header = () => {
    const dispatch = useAppDispatch();

    const UserName = useAppSelector(username);
    const IsLogin = useAppSelector(isLogin)

    console.log(IsLogin)

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <header className={styles.Header}>
            <nav className={styles.HeaderWrapper}>
                <LinkElement to={"/"} LinkText={"Главная"} />
                {
                    IsLogin ?
                        <div>
                            <Button ButtonText={`${UserName}`}></Button>
                            <Button onClick={handleLogout} ButtonText={`Выйти`}></Button>
                        </div>
                        :
                        <div>
                            <LinkElement style={{ margin: "0 10px 0 0" }} to={"/login"} LinkText={"Войти"} />
                            <LinkElement to={"/register"} LinkText={"Регистрация"} />
                        </div>
                }
            </nav>
        </header>
    )
}

export default Header