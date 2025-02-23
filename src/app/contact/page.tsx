import { ContactForm } from '@/components/contact/contact-form';

import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div>
      <h1 className="pagetitle">Contact</h1>
      <div className={styles.blurb}>
        Feel free to contact me with any questions or comments. Please leave your message and I&apos;ll do my best to
        respond.
      </div>
      <ContactForm />
    </div>
  );
}
