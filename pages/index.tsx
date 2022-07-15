import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>All Sets prototypes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          All Sets Prototypes
        </h1>

        <p className={styles.description}>
          Vind hieronder alle prototypes voor de componenten en/of journeys.
        </p>

        <div className={styles.grid}>
          <Link passHref href="/slider-1">
            <a className={styles.card}>
              <h2>Journal entry question 1 &rarr;</h2>
              <p>Basic journal entry with emphasis on the satisfaction slider</p>
            </a>
          </Link>

          <Link passHref href="/slider-2">
            <a className={styles.card}>
              <h2>Journal entry question 2 &rarr;</h2>
              <p>Iteration on slider 1 with more control over slider and thinner container</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
