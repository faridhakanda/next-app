import React from 'react'
import Navbar from './components/navbar';
import styles from './DashBoard.module.css'
import Link from 'next/link';
const links = [
  {
    'id': 1,
    'urls': '/dashboard/view-profile',
    'title': 'View Profile'
  },
  {
    'id': 2,
    'urls': '/dashboard/change-password',
    'title': 'Change Password'
  },
  {
    'id': 3,
    'urls': '/dashboard/logout',
    'title': 'Log Out',
  },
  {
    'id': 4,
    'urls': '/dashboard/settings',
    'title': 'Settings'
  }

];
const Dashboard = () => {
  return (
    <div className={styles.content}>
      {/*<Link className={styles.setting} href="/dashboard/settings">Settings</Link>  */}
      {
        links.map(link => (
          <Link className={styles.setting} key={link.id} href={link.urls}>{link.title}</Link>
        ))
      }
      <div className={styles.blog}>
        <h1>Welcome to FaridLabs!</h1>
        <p>We are providing different kind 
          technical solution about web technology and software development.
        </p>
      </div>
    </div>
  )
}

export default Dashboard;
