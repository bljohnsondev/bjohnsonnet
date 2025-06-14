'use client';

import ky from 'ky';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Button } from '@/components/common/form/button';
import { Input } from '@/components/common/form/input';
import { Textarea } from '@/components/common/form/text-area';
import type { ContactMessage } from '@/types/contact-message';
import type { ContactResponse } from '@/types/contact-response';

import styles from './contact-form.module.css';

interface FormValues {
  contactName?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      contactName: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: FormValues) {
    if (!values.message) {
      toast.error('Please fill in the required fields');
      return;
    }

    const message: ContactMessage = {
      name: values.contactName,
      email: values.email,
      message: values.message,
    };

    try {
      setLoading(true);
      const response: ContactResponse = await ky.post('/api/sendmsg', { json: message }).json();
      setLoading(false);

      if (response.error) {
        toast.error('An error occurred when sending your message');
      } else {
        toast.success('Your message has been sent');
      }
      reset();
    } catch {
      setLoading(false);
      toast.error('An error occurred when sending your message');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input label="Name" name="contactName" disabled={loading} control={control} />
      <Input label="Email" name="email" disabled={loading} control={control} />
      <Textarea
        label="Message"
        name="message"
        disabled={loading}
        required
        rules={{ required: 'Message is required' }}
        control={control}
        className={styles.textarea}
      />
      <div className="actions">
        <Button type="submit" disabled={loading} className={styles.submit}>
          Send
        </Button>
      </div>
    </form>
  );
}
