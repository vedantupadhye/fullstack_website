import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Made by Vedant Upadhye</div>
      <div>
        <div className={styles.social} >
          <Image src='/1.png' height={15} width={15} alt='facebook' className={styles.icon}></Image>
          <Image src='/2.png' height={15} width={15} alt='facebook' className={styles.icon}></Image>
          <Image src='/3.png' height={15} width={15} alt='facebook' className={styles.icon}></Image>
          <Image src='/4.png' height={15} width={15} alt='facebook' className={styles.icon}></Image>
        </div>
      </div>
    </div>
  )
}

export default Footer