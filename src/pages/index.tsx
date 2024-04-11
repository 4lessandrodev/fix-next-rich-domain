import type { NextPage } from 'next'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { Context, Id } from 'rich-domain';
const context = Context.events();

const Home: NextPage = () => {

  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    context.subscribe('SIGNUP', (e) => {
      setEvents((old) => [...old, e.detail]);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Card name={`User ${events.length}`} id={Id()} />
      <div>
        <ul>
          {events.map((evt: any, i) => (
            <li key={i}>{`Event: ${evt?.[1]}`}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
