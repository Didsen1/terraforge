import React, { useState } from "react";
import FormInput from "../../../shared/FormInput";
import FormLabel from "../../../shared/FormLabel";
import styles from './Register.module.scss'
import { Value } from "sass";

type RegisterFormData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {
    const [formData, setFormData] = useState<RegisterFormData>({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isDataDirty, setDataDirty] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
    })

    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name } = e.target;
        setDataDirty((prevState) => ({
            ...prevState,
            [name]: true,
        }));
    };

    const validateEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? "" : "Некорректный email";
    }

    const onlyLetters = (value: string) => {
        const errorMessage = "Допустимы только символы, цифры и буквы латинского алфавита";
        const regex = /^[\x00-\x7F]+$/;
        return !regex.test(value) ? errorMessage : "";
    }

    const validateConfirmPassword = (password: string, confirmPassword: string) => {
        return password === confirmPassword ? '' : "Пароли не совпадают";
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        let errorMessage = "";

        switch (name) {
            case 'username':
                errorMessage = onlyLetters(value);
                break;
            case 'email':
                errorMessage = onlyLetters(value) || validateEmail(value); // Проверка на email и обязательность
                break;
            case 'password':
                errorMessage = onlyLetters(value); // Проверка на длину пароля и обязательность
                break;
            case 'confirmPassword':
                errorMessage = validateConfirmPassword(formData.password, value); // Проверка на совпадение с паролем
                break;
        }

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage || ''
        }));
    }

    return (
        <>
            <label className={styles.FormLabel} htmlFor='username'>
                Логин
                {
                    <input className={styles.FormInput} minLength={2} type="text" name="username" onBlur={blurHandler} onChange={handleInputChange} required></input>
                }
            </label>
            {isDataDirty.username && formErrors.username && <div>{formErrors.username}</div>}
            <label className={styles.FormLabel} htmlFor="password">
                Пароль
                {
                    <input className={styles.FormInput} minLength={8} type="password" name="password" onBlur={blurHandler} onChange={handleInputChange} required></input>
                }
            </label>
            {isDataDirty.password && formErrors.password && <div>{formErrors.password}</div>}
            <label className={styles.FormLabel} htmlFor="confirmPassword">
                Повторите пароль
                {
                    <input className={styles.FormInput} type="password" name="confirmPassword" onBlur={blurHandler} onChange={handleInputChange} required></input>
                }
            </label>
            {isDataDirty.confirmPassword && formErrors.confirmPassword && <div>{formErrors.confirmPassword}</div>}
            <label className={styles.FormLabel} htmlFor="email">
                E-mail
                {
                    <input className={styles.FormInput} type="email" name="email" onBlur={blurHandler} onChange={handleInputChange} required></input>
                }
            </label>
            {isDataDirty.email && formErrors.email && <div>{formErrors.email}</div>}
        </>
    )
}

export default Register;