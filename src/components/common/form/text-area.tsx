import {
  Field,
  Label,
  Textarea as HeadlessTextarea,
  type TextareaProps as HeadlessTextareaProps,
} from '@headlessui/react';
import clsx from 'clsx';
import { useController, type UseControllerProps } from 'react-hook-form';

import styles from './text-area.module.css';

type TextareaProps = UseControllerProps &
  Pick<HeadlessTextareaProps, 'required' | 'disabled' | 'placeholder' | 'className'> & {
    label?: string;
  };

export function Textarea({ label, name, rules, control, ...rest }: TextareaProps) {
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
      <HeadlessTextarea disabled={rest.disabled} placeholder={rest.placeholder} className={rest.className} {...field} />
      {error && <div className="error-message">{error.message}</div>}
    </Field>
  );
}
