
import { linkSync } from 'fs'
import { url } from 'inspector'
import Link from 'next/link'
import { setSyntheticLeadingComments } from 'typescript'
import styles from './Navbar.module.css'

const links = [
    {
        'id': 1,
        'urls': '/',
        'title': 'Home'
    },
    {
        'id': 2,
        'urls': '/about',
        'title': 'About'
    },
    {
        'id': 3,
        'urls': '/blog',
        'title': 'Blog'
    }, 
    {
        'id': 4,
        'urls': '/portfolio',
        'title': 'Portfolio'
    },
    {
        'id': 5,
        'urls': '/contact',
        'title': 'Contact'
    },
    {
        'id': 6,
        'urls': '/dashboard',
        'title': 'DashBoard'
    }
]

export default function Navbar() {
    return(
        
        <div className={styles.container}>
            <Link className={styles.logo} href="/">QuarkLab</Link>
            {/* 
            <div className={styles.Links}>
                
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/dashboard">DBoard</Link>
                
                <button 
                    className={styles.logout}
                    
                >
                    Logout
                </button>
            </div>
            

            {links.map(link=>(
                <Link key={link.id} href={link.urls}>{link.titile}</Link>
            ))}
            */}
            <div className={styles.Links}>
                {
                    links.map(link => (
                        <Link key={link.id} href={link.urls}>{link.title}</Link>
                    ))
                }
                <button className={styles.logout}>
                    Logout
                </button>
            </div>
        </div>
    )
}