import React from 'react';
import { ControlledTextFieldProps } from './types';
import { Controller } from 'react-hook-form';
import { ErrorText, TextField } from './styles';
import { TextInput } from 'react-native-paper';


const ControledInput = ({name, control, type, label, required}: ControlledTextFieldProps) => {
    return (
        <React.Fragment>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <React.Fragment>
                        <TextInput
                            mode='outlined'
                            label={label}
                            value={value}
                            onChangeText={onChange}
                            error={!!error}
                        />
                        <ErrorText>{error ? error.message : null}</ErrorText>
                    </React.Fragment>
                        

                )}
                rules={{ required: required }}
            />
        </React.Fragment>
    );
}

export default ControledInput;