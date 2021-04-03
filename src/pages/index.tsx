import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moyu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to <a href="https://join.moyu.ooo">Moyu Club</a>!
        </h1>

        <p className={styles.description}>
          Learn more in <a href="/about">here</a>
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://join.moyu.ooo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with by
          <img src="/moyu.svg" alt="Moyu Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}