import React from "react";
import Button from "../../../shared/Button";
import FormLabel from "../../../shared/FormLabel";
import { useForm } from "react-hook-form";
import LinkElement from "../../../shared/LinkElement";
import { createUser } from "../model/RegisterAPI";
import styles from './Register.module.scss'

type RegisterFormData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
        getValues,
    } = useForm<RegisterFormData>({ mode: 'onBlur' });

    const onSubmit = (data: any) => {
        createUser(data).then(res => { console.log(res) })
        alert("welcome to le club buddy")
        reset()
    }

    return (

        <section className={styles.FormWrapper}>
            <h2 className={styles.FormWrapper__title}>Регистрация</h2>
            <form className={styles.FormWrapper__Form} onSubmit={handleSubmit(onSubmit)}>
                <FormLabel htmlFor={"username"} labelText={"Логин"} children={
                    <input className={styles.FormInput} type="text"   {...register(
                        "username", {
                        required: "Поле обязательно для заполнения",
                        minLength: {
                            value: 3,
                            message: "Логин должен быть не короче 3 символов"
                        },
                        maxLength: {
                            value: 20,
                            message: "Логин должен быть не длинее 20 символов"
                        },
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
                            minLength: {
                                value: 6,
                                message: "Пароль должен быть не короче 6 символов"
                            },
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                                message: "Пароль должен содержать хотя бы: одну заглавную букву (A-Z), одну строчную букву (a-z), одну цифру (0-9),специальный символ (например, !@#$%^&*)."
                            }
                        }
                        )} />
                } />
                <div className={styles.FormErrorsWrapper}>
                    {errors.password && <p className={styles.FormErrors}>{(errors.password.message as string) || "Ошибка!"}</p>}
                </div>
                <FormLabel htmlFor={"confirmPassword"} labelText={"Повторите пароль"} children={
                    <input className={styles.FormInput} type="password"
                        {...register(
                            "confirmPassword", {
                            required: "Поле обязательно для заполнения",
                            validate: value =>
                                value === getValues("password") || "Пароли не совпадают"
                        }
                        )}
                    />
                } />
                <div className={styles.FormErrorsWrapper}>
                    {errors.confirmPassword && <p className={styles.FormErrors}>{(errors.confirmPassword.message as string) || "Ошибка!"}</p>}
                </div>
                <FormLabel htmlFor={"email"} labelText={"Email"} children={
                    <input className={styles.FormInput} type="email"
                        {...register(
                            "email", {
                            required: "Поле обязательно для заполнения",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Некорректный email"
                            }
                        }
                        )}
                    />
                } />
                <div className={styles.FormErrorsWrapper}>
                    {errors.email && <p className={styles.FormErrors}>{(errors.email.message as string) || "Ошибка!"}</p>}
                </div>
                <div className={styles.FormWrapper__ButtonWrapper}>
                    <Button type={"submit"} ButtonText={"Зарегистрироваться"} disabled={!isValid} />
                    <LinkElement style={{ color: 'black' }} to={'/login'} LinkText={"Войти"} />
                </div>
            </form>
        </section>
    )
}

export default Register;
