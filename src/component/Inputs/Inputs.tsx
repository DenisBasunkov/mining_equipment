import React, { useState } from "react";
import styles from "./Inputs.module.scss";
import InputMask from "react-input-mask";

interface IInputProps {
    type?: "text" | "phone",
    required?: boolean,
    value?: string | number | readonly string[] | undefined,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    name?: string,
    placeholder?: string,
    style?: React.CSSProperties
}


export const Input_Custom: React.FC<IInputProps> = ({ style, type = "text", required = false, value, onChange, name, placeholder }) => {

    const [touched, setTouched] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false);
    const [values, setValues] = useState<string | number | readonly string[] | undefined>(value)

    const handleBlur = () => {
        setTouched(true);
        const valueString = values ? values.toString() : '';

        // Проверяем, если поле обязательное и маска не заполнена
        if (required && (!valueString || (type === "phone" && valueString.includes("_")))) {
            setError(true);
        } else {
            setError(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(e.target.value);
        if (onChange) {
            onChange(e);
        }

        if (required) {
            if (type === "text") {
                setError(e.target.value.trim() === '');
            } else if (type === "phone") {
                setError(e.target.value.includes("_"));
            }
        }
    };

    return <InputMask
        style={style}
        mask={type == "phone" ? "+7 (999) 999-99-99" : ""}
        placeholder={placeholder}
        name={name}
        value={values}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={() => setTouched(true)}
        className={`${styles.input_Container} ${error && touched ? styles.error : ""}`}
    >
        {/* {(InputMask: ReactInputMask) => <input {...InputMask} type="text" required={required} />} */}
    </InputMask>
}