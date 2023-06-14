import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Farid from '/farid.jpg'
const footerImage = [
  {
    'id': 1,
    'urls': '/facebook.png',
    'title': 'facebook',
  },
  {
    'id': 2,
    'urls':'/linkedin.png',
    'title':'linkedin'
  },
  {
    'id': 3,
    'urls': '/twitter.png',
    'title': 'twitter'
  },
  {
    'id': 4,
    'urls': '/telegram.png',
    'title':'telegram'
  }
]
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>&copy;2023 Farid All Right Reserved.</h1>
      </div>
      <div className={styles.foota}>
        {/* 
        another way to do the below work for footer
        <Image src="name" alt="name" widht={48} height={48} />
        */}
        {
          footerImage.map(foota => (
            <Image key={foota.id}
              src={foota.urls}
              alt={foota.title}
              width={48}
              height={48}
              />
          ))
        }
      </div>
    </div>
  )
}

export default Footer;
