import { Button as HeadlessButton, type ButtonProps as HeadlessButtonProps } from '@headlessui/react';

// this is just a wrapper component for the existing headlessui button as a placeholder
export function Button({ ...props }: HeadlessButtonProps) {
  return <HeadlessButton {...props}>{props.children}</HeadlessButton>;
}
