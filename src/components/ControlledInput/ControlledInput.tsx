import React, { useState } from 'react';
import { ControlledTextFieldProps } from './types';
import { Controller } from 'react-hook-form';
import { ErrorText } from './styles';
import { TextInput } from 'react-native-paper';


const ControlledInput = ({name, control, type, label, required, icon}: ControlledTextFieldProps) => {

    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(type === 'password' ? true : false);
    const [showIcon, setShowIcon] = useState<string>(icon?? '');

    const toggleIcon = (icon: string) => {
        if (icon === 'eye') {
            setShowIcon('eye-off');
        }
        else if (icon === 'eye-off') {
            setShowIcon('eye');
        }
    }

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
                                showIcon && (
                                    <TextInput.Icon
                                    name={showIcon}
                                        onPress={() => {
                                            if (showIcon === 'eye-off' || showIcon === 'eye' && type === 'password') {
                                                setSecureTextEntry(prevState => !prevState);
                                                toggleIcon(showIcon);
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

export default ControlledInput;