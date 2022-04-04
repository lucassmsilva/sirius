import React, { useState } from 'react';
import { Keyboard } from 'react-native'
import { Controller } from 'react-hook-form';
import { ErrorText } from './styles';
import { Portal, Modal, TextInput, Button } from 'react-native-paper';
// import TextInputMask from 'react-native-text-input-mask';
// import { If } from 'react-extras';
import DatePicker from 'react-native-modern-datepicker';

const DatePickerCustom = ({name, control, type, label, required}: any) => {
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
    return (
        <React.Fragment>

            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <React.Fragment>
                        <TextInput
                            label={label}
                            value={value}
                            onChangeText={onChange}
                            mode="outlined"
                            error={!!error}
                            right={
                                <TextInput.Icon
                                    name="calendar"
                                    onPress={
                                        () => {
                                            Keyboard.dismiss()
                                            setShowDatePicker(true)
                                        }
                                    }
                                />
                            }
                            // render={
                            //     props => {
                            //         return (
                            //             <TextInputMask
                            //             {...props}
                            //             mask="[0000]/[00]/[00] [00]:[00]"
                            //         />
                            //         )
                            //     }
                            // }
                        />

                        <Button onPress={
                            () => {
                                Keyboard.dismiss()
                                setShowDatePicker(true)
                            }
                        }
                            >RENDER CALENDAR!</Button>

                        {showDatePicker && (
                            <Portal>
                                <Modal visible={showDatePicker} onDismiss={() =>setShowDatePicker(false) }>
                                    <DatePicker
                                        onSelectedChange={onChange}
                                        />
                                </Modal>
                            </Portal>
                        )}
                            
                        <ErrorText>{error ? error.message : null}</ErrorText>
                    </React.Fragment>
                        

                )}
                rules={{ required: required }}
            />
        </React.Fragment>
    );
}

export default DatePickerCustom;