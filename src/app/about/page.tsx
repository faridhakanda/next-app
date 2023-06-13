import React from 'react'
import Image from 'next/image'
import styles from  './page.module.css'
const About = () => {
  return (
    <div className={styles.page}>
      <h1>About Myself</h1>
      <Image 
        src="/farid.jpg"
        alt="Farid Akanda"
        width={500}
        height={500}
        />
    </div>
  )
}
export default About;
