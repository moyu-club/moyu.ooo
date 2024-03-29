import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moyu</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/static/icons/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>This is about page</h1>
      </main>

      <footer className={styles.footer}>
        Built with by
        <img src="/moyu.svg" alt="Moyu Logo" className={styles.logo} />
      </footer>
    </div>
  );
}
