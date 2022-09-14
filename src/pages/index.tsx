import type { NextPage } from 'next'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Card name="Jane Doe" />
    </div>
  )
}

export default Home
