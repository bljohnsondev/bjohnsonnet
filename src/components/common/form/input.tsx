import { Field, Input as HeadlessInput, type InputProps as HeadlessInputProps, Label } from '@headlessui/react';
import clsx from 'clsx';
import { useController, type UseControllerProps } from 'react-hook-form';

import styles from './input.module.css';

type InputProps = UseControllerProps &
  Pick<HeadlessInputProps, 'required' | 'disabled' | 'placeholder' | 'className'> & {
    label?: string;
  };

export function Input({ label, name, rules, control, ...rest }: InputProps) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <Field className={clsx({ [styles.field]: true, [styles.required]: rest.required })}>
      {label && <Label>{label}</Label>}
      <HeadlessInput disabled={rest.disabled} placeholder={rest.placeholder} className={rest.className} {...field} />
      {error && <div className="error-message">{error.message}</div>}
    </Field>
  );
}
