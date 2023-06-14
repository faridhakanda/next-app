import React from 'react'
//import Navbar from './components/navbar';
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
    'urls': '/dashboard/log',
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
    
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>DashBoard</button>
          <div className={styles.dropdown_content}>
            {
              links.map(link => (
                <Link key={link.id} href={link.urls}>{link.title}</Link>
              ))
            }
          </div>

        </div>
        
  )
}

export default Dashboard;
