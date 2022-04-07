import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { ControlledPickerProps } from './types';
import { Controller } from 'react-hook-form';
import { ErrorText } from '../../styles';
import { customColors } from '../../theme';
import { PickerField } from './styles';
import { View } from 'react-native';

const ControlledPicker = ({ name, control, items, required }: ControlledPickerProps) => {

    items = (items ?? []).filter(item => item != undefined);
    console.log(items)
    
    return (
        <React.Fragment>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <React.Fragment>
                        <PickerField> 
                            <Picker
                                testID="basic-picker"
                                mode='dropdown'
                                selectedValue={value}
                                onValueChange={onChange}
                                style={{
                                    height: 40,
                                    alignItems: 'center',
                                    bottom: 6,
                                    color: (error)? customColors.error :((value == '')? customColors.textMuted : customColors.textDark)
                                }}
                            >
                                {items.map((item, index) => (
                                    <Picker.Item
                                        key={index}
                                        color={customColors.textDark}
                                        label={item.label}
                                        value={item.value}
                                    />
                                ))}
                            </Picker>
                        </PickerField>
                        {error && (
                            <View style={{width: '100%'}}>
                                <ErrorText>{error ? error.message : null}</ErrorText>
                            </View>
                        )}
                    </React.Fragment>
                        
        
                )}
                rules={{ required: required }}
            />
        </React.Fragment>

    );

}

export default ControlledPicker;
