import Head from 'next/head';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';

export default function Signup() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send data to your backend for user creation
    // For demonstration, we'll just redirect to login after a delay
    setTimeout(() => {
      router.push('/login');
    }, 2000); // Redirects to login page after 2 seconds
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Account</title>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
      </Head>
      <h1 className={styles.title}>Create Account</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="email" placeholder="Email" className={styles.input} required />
        <input type="email" placeholder="Confirm Email" className={styles.input} required />
        <input type="password" placeholder="Password" className={styles.input} required />
        <input type="password" placeholder="Confirm Password" className={styles.input} required />
        <button type="submit" className={styles.button}>Sign Up</button>
      </form>
      <p className={styles.link}>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}