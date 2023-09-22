import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Layout from './Layout'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Layout />
      <h1 className={styles.selectTitle}> Choose a Gallery</h1>
    <div className={styles.items}>
      <Link href="/portfolio/Illustration" className={styles.item}>
      <span className={styles.title}>Illustration</span>
      </Link>

      <Link href="/portfolio/websites" className={styles.item}>
      <span className={styles.title}>Websites</span>
      </Link>

      <Link href="/portfolio/applications" className={styles.item}>
      <span className={styles.title}>Applications</span>
      </Link>
    </div>
    </div>
  )
}

export default Portfolio