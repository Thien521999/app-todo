import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;

    const { errors } = form;
    const hasError = errors[name];

    // const {errors, formState} = form;
    // const hasError = formState.touched[name] && errors[name];
    // console.log(errors[name], formState.touched[name]);

    return (
        <Controller
            name={name}
            control={form.control}

            render={({ onChange, onBlur, value, name }) => (
                <TextField
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    label={label}
                    disabled={disabled}

                    error = {!!hasError}
                    helperText={errors[name]?.message}

                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    name={name}
                />
            )}
        />
    );
}

export default InputField;