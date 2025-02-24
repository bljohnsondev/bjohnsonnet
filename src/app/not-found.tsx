import Link from 'next/link';

import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notfound}>
      <h1 className="pagetitle">Not Found</h1>
      <p>The page you requested coult not be found.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
