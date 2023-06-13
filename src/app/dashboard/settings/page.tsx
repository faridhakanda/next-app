import React from 'react'
import Link from 'next/link'
import styles from './Setting.module.css'
const Settings = () => {
  return (
    <div className={styles.content}>
        <Link className={styles.setting} href="/dashboard">DashBoard</Link>
        <div className={styles.blog}>
            <h1>Settings Page for User</h1>
            <p>I want to make a useful project for my 
                college friend who are interested to know all 
                about computer science and engineering.
            </p>
        </div>
    </div>
  )
}

export default Settings