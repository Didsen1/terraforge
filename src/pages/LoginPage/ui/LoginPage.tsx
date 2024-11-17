import React from "react";
import FormLabel from "../../../shared/FormLabel";
import FormWrapper from "../../../widgets/FormWrapper";
import FormInput from "../../../shared/FormInput";
import Form from "../../../features/Form";
import FormError from "../../../shared/FormError";
import { useForm } from "react-hook-form";
import { loginUser } from "../../../features/Login";
import { login } from "../../../entities/user";
import { useAppDispatch } from "../../../app/store/hooks";
import styles from "./LoginPage.module.scss"

type LoginFormData = {
    username: string;
    password: string;
}

const LoginPage = () => {
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
        <FormWrapper onSubmit={handleSubmit(onSubmit)} formTitleText={"Авторизация"} >
            <Form formButtonText={"Войти"} formLinkText={"Регистрация"} formLinkPath={'/register'} isValid={isValid}>
                <FormLabel htmlFor={"username"} labelText={"Логин"}>
                    <FormInput
                        type="text"
                        name="username"
                        register={register}
                        rules={{
                            required: "Поле обязательно для заполнения",
                            pattern: {
                                value: /^[\x00-\x7F]+$/,
                                message: "Допустимы только символы, цифры и буквы латинского алфавита"
                            }
                        }}
                        error={errors.username?.message} />
                    <FormError errors={errors} errorName={"username"} />
                </FormLabel>
                <FormLabel htmlFor={"password"} labelText={"Пароль"}>
                    <FormInput
                        type="password"
                        name="password"
                        register={register}
                        rules={{
                            required: "Поле обязательно для заполнения",
                            pattern: {
                                value: /^[\x00-\x7F]+$/,
                                message: "Допустимы только символы, цифры и буквы латинского алфавита"
                            }
                        }}
                        error={errors.password?.message} />
                    <FormError errors={errors} errorName={"password"} />
                </FormLabel>
            </Form>
        </FormWrapper>
    )
}

export default LoginPage