import Link from 'next/link';

// the global 404 not found should use the standard app layout
import AppLayout from './(app)/layout';

import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <AppLayout>
      <div className={styles.notfound}>
        <h1 className="pagetitle">Not Found</h1>
        <p>The page you requested coult not be found.</p>
        <Link href="/">Return Home</Link>
      </div>
    </AppLayout>
  );
}
