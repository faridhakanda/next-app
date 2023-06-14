import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <div className={styles.user_blog}>
        <div className={styles.user_header}>
          <Image className={styles.user_header_image}
            src="/farid.jpg"
            alt="farid"
            width={50}
            height={50}
            />
            <h1>Farid Akanda</h1>
        </div>
        <h2>Robotics and Maching Learngin is the trending technology.</h2>
        <div className={styles.user_image}>
          <Image
            
            
            src="/macbook.jpg"
            alt="macbook"
            width = "300"
            height = "300"
            
          />
        </div>
        
        <p>MacBook is my favorite choose for programming and web development. 
          Robotics is one of the dynamic subject in the present time. Most of developed country 
          want to applied all of the company robotics in critical work.
        </p>

      </div>
    </main>
  )
}
