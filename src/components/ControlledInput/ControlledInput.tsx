import React, { useState } from 'react';
import { ControlledTextFieldProps } from './types';
import { Controller } from 'react-hook-form';
import { ErrorText, TextField } from './styles';
import { TextInput } from 'react-native-paper';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';


const ControledInput = ({name, control, type, label, required, icon}: ControlledTextFieldProps) => {

    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(type === 'password' ? true : false);

    return (
        <React.Fragment>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <React.Fragment>
                        <TextInput
                            dense={true}
                            mode='outlined'
                            label={label}
                            value={value}
                            onChangeText={onChange}
                            error={!!error}
                            activeOutlineColor='#0275d8'
                            style={{ backgroundColor: '#fff' }}
                            secureTextEntry={secureTextEntry}
                            right={
                                icon && (
                                    <TextInput.Icon
                                    name={icon}
                                        onPress={() => {
                                            if (icon === 'eye' && type === 'password') {
                                                setSecureTextEntry(prevState => !prevState);
                                            }
                                        }
                                    }
                                />
                                )

                            }
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