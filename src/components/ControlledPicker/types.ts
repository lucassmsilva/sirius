import { Control, FieldValues } from 'react-hook-form';

type PickerItem = {
    label: string;
    value: string | number;
}

export type ControlledPickerProps = {
    name: string;
    items: Array<PickerItem>
    control: Control<FieldValues, any>;
    required?: boolean;
}