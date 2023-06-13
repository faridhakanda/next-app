import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Farid from '/farid.jpg'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>&copy;2023 Farid All Right Reserved.</h1>
      </div>
      <div>
        <Image 
          src="/facebook.png"
          alt="facebook"
          width={48}
          height={48}
          />
        <Image 
          src="/linkedin.png"
          alt="facebook"
          width={48}
          height={48}
          />
        <Image 
          src="/twitter.png"
          alt="facebook"
          width={48}
          height={48}
          />
        <Image
          src="/telegram.png"
          alt="telegram"
          width={48}
          height={48}
          />

      </div>
    </div>
  )
}

export default Footer;
