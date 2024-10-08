'use client';

import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';

export default function Footer() {
  const [users, setUsers] = useState([]);

  const fetchEndpoint = async () => {
    const response = await fetch('/api/testApi');
    const data = await response.json();
    console.log("API URL :", data)
    setUsers(data)
    return data
  }

  
  useEffect(() => {
   fetchEndpoint()
  }, []);

  // const data = fetchEndpoint()

  return (
    <footer className={styles.footer}>
            <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by Next.js
            </a>
            <p>
              Test Api Endpoint: {users.apiEndpoint}
            </p>
    </footer>
  );
}
