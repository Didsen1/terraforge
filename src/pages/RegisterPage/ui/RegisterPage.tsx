import React from "react";
import FormWrapper from "../../../widgets/FormWrapper";
import FormInput from "../../../shared/FormInput";
import FormLabel from "../../../shared/FormLabel";
import Form from "../../../features/Form";
import FormError from "../../../shared/FormError";
import { createUser } from "../../../features/Register/model/RegisterAPI";
import { useForm } from "react-hook-form";
import styles from "./RegisterPage.module.scss"

type RegisterFormData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterPage = () => {
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
        <FormWrapper onSubmit={handleSubmit(onSubmit)} formTitleText={"Регистрация"} >
            <Form formButtonText={"Зарегистрироваться"} formLinkText={"Войти"} formLinkPath={'/login'} isValid={isValid}>
                <FormLabel htmlFor={"username"} labelText={"Логин"}>
                    <FormInput
                        type="text"
                        name="username"
                        register={register}
                        rules={{
                            required: "Поле обязательно для заполнения",
                            minLength: {
                                value: 3,
                                message: "Логин должен быть не короче 3 символов",
                            },
                            maxLength: {
                                value: 20,
                                message: "Логин должен быть не длинее 20 символов",
                            },
                            pattern: {
                                value: /^[\x00-\x7F]+$/,
                                message: "Допустимы только символы, цифры и буквы латинского алфавита",
                            },
                        }}
                        error={errors.username?.message}
                    />
                    <FormError errors={errors} errorName={"username"} />
                </FormLabel>
                <FormLabel htmlFor={"password"} labelText={"Пароль"}>
                    <FormInput
                        type="password"
                        name="password"
                        register={register}
                        rules={{
                            required: "Поле обязательно для заполнения",
                            minLength: {
                                value: 6,
                                message: "Пароль должен быть не короче 6 символов"
                            },
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                                message: "Пароль должен содержать хотя бы: одну заглавную букву (A-Z), одну строчную букву (a-z), одну цифру (0-9),специальный символ (например, !@#$%^&*)."
                            },
                        }}
                        error={errors.password?.message}
                    />
                    <FormError errors={errors} errorName={"password"} />
                </FormLabel>
                <FormLabel htmlFor={"confirmPassword"} labelText={"Повторите пароль"}>
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        register={register}
                        rules={{
                            required: "Поле обязательно для заполнения",
                            validate: (value: string) =>
                                value === getValues("password") || "Пароли не совпадают"
                        }}
                        error={errors.password?.message}
                    />
                    <FormError errors={errors} errorName={"confirmPassword"} />
                </FormLabel>
                <FormLabel htmlFor={"email"} labelText={"Email"}>
                    <FormInput
                        type="email"
                        name="email"
                        register={register}
                        rules={{
                            required: "Поле обязательно для заполнения",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Некорректный email"
                            }
                        }}
                        error={errors.email?.message}
                    />
                    <FormError errors={errors} errorName={"email"} />
                </FormLabel>
            </Form>
        </FormWrapper>
    )
}

export default RegisterPage
