import { UseFormRegister, FieldErrors } from 'react-hook-form';

export type FormData = {
  [key: string]: string;
};

export type CheckBoxProps = {
  register: UseFormRegister<FormData>;
  errors?: FieldErrors<FormData>;
  checkboxInput?: string;
};
