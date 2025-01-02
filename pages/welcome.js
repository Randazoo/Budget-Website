import Head from 'next/head';
import styles from '../styles/Welcome.module.css';

export default function Welcome() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
      </Head>
      <h1 className={styles.welcome}>Welcome</h1>
    </div>
  );
}