import Head from 'next/head';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send login request to the API
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      // If login is successful, redirect to welcome page
      setError('');
      router.push('/welcome');
    } else {
      // If login fails, show error
      setError(data.error || 'Login failed');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
      </Head>
      <h1 className={styles.title}>Login</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          type="email" 
          placeholder="Email" 
          className={styles.input} 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className={styles.input} 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
      <p className={styles.link}>
        Don't have an account? <a href="/signup">Create Account</a>
      </p>
    </div>
  );
}