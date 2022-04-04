import { Control, FieldValues } from 'react-hook-form';

export type ControlledTextFieldProps = {
  name: string;
  label: string;
  control: Control<FieldValues, any>;
  required?: boolean;
  type: string;
}