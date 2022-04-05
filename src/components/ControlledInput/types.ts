import { Control, FieldValues } from 'react-hook-form';

export type ControlledTextFieldProps = {
  name: string;
  label: string;
  type: string;
  control: Control<FieldValues, any>;
  required?: boolean;
  icon?: string;
}