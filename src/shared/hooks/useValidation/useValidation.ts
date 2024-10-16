import React from "react";
import isEmail from 'isemail';
import { useState, useCallback } from "react";

const useValidation = () => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isFormValid, setFormValid] = useState(false);
    const NAME_VALIDATION = 'Имя может содержать только буквы латинского алфавита, символы и цифры.';
    const EMAIL_VALIDATION = 'Неправильный формат email';


    function handleChange(event:any) {
        const target = event.target;
        const { name, value } = target;

        const setCustomValidity = (message:any) => {
            target.setCustomValidity(message);
        };

        if (name === "name" && target.validity.patternMismatch) {
            setCustomValidity(NAME_VALIDATION);
        } else if (name === 'email' && !isEmail.validate(value)) {
            setCustomValidity(EMAIL_VALIDATION);
        } else {
            setCustomValidity('');
        }

        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setFormValid(target.closest("form").checkValidity());
    }

    const resetForm = useCallback(
        (isFormValid = false, values = {}, errors = {}) => {
            setFormValid(isFormValid);
            setValues(values);
            setErrors(errors);
        },
        [setFormValid, setValues, setErrors]
    );

    return { values, errors, isFormValid, handleChange, resetForm };

}

export default useValidation