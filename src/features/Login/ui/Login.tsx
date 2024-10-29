import React from "react";
import Button from "../../../shared/Button";
import FormLabel from "../../../shared/FormLabel";
import { useForm } from "react-hook-form";
import LinkElement from "../../../shared/LinkElement";
import { loginUser } from "../model/LoginApi";
import { login } from "../../../entities/user";
import { useAppDispatch } from "../../../app/store/hooks";
import styles from './Login.module.scss'

type LoginFormData = {
    username: string;
    password: string;
}

const Login = () => {

    const dispatch = useAppDispatch();

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm<LoginFormData>({ mode: 'onBlur' });

    const onSubmit = async (data: any) => {
        try {
            const res = await loginUser(data);
            if (res) {
                const username = data.username;
                const token = res;
                dispatch(login({ username, token, isLogin: true }));
                alert("SexFull");
                reset();
            } else {
                console.error("Пустой ответ от loginUser");
            }
        } catch (err: any) {
            console.error(`Ошибка при использовании ручки onSubmit: ${err.code}:${err.message}`);
        }
    };

    return (

        <section className={styles.FormWrapper}>
            <h2 className={styles.FormWrapper__title}>Авторизация</h2>
            <form className={styles.FormWrapper__Form} onSubmit={handleSubmit(onSubmit)}>
                <FormLabel htmlFor={"username"} labelText={"Логин"} children={
                    <input className={styles.FormInput} type="text"   {...register(
                        "username", {
                        required: "Поле обязательно для заполнения",
                        pattern: {
                            value: /^[\x00-\x7F]+$/,
                            message: "Допустимы только символы, цифры и буквы латинского алфавита"
                        }
                    }
                    )} />
                } />
                <div className={styles.FormErrorsWrapper}>
                    {errors.username && <p className={styles.FormErrors}>{(errors.username.message as string) || "Ошибка!"}</p>}
                </div>
                <FormLabel htmlFor={"password"} labelText={"Пароль"} children={
                    <input className={styles.FormInput} type="password"
                        {...register(
                            "password", {
                            required: "Поле обязательно для заполнения",
                            pattern: {
                                value: /^[\x00-\x7F]+$/,
                                message: "Допустимы только символы, цифры и буквы латинского алфавита"
                            }
                        }
                        )} />
                } />
                <div className={styles.FormErrorsWrapper}>
                    {errors.password && <p className={styles.FormErrors}>{(errors.password.message as string) || "Ошибка!"}</p>}
                </div>
                <div className={styles.FormWrapper__ButtonWrapper}>
                    <Button type={"submit"} ButtonText={"Войти"} disabled={!isValid} />
                    <LinkElement style={{ color: 'black' }} to={"/register"} LinkText={"Регистрация"}></LinkElement>
                </div>
            </form>
        </section>
    )
}

export default Login;