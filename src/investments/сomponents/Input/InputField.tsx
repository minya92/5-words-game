import React from 'react';
import {FieldRenderProps} from 'react-final-form';
import Input from "./index";

export const InputField: React.FC<FieldRenderProps<string, HTMLElement>> = ({
    input,
    meta,
    label,
    placeholder,
}) => {
    return (
        <Input
            label={label}
            value={input.value}
            onChange={input.onChange}
            error={meta.touched && meta.error ? meta.error : null}
            placeholder={placeholder}
        />
    );
};

export default InputField;
