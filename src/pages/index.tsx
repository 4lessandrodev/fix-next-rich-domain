import type { NextPage } from 'next'
import Context1 from '../components/Context-1'
import Context2 from '../components/Context-2'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { Context, Id } from 'rich-domain';
const context = Context.events();

const Home: NextPage = () => {

  const [events1, setEvents1] = useState<any[]>([]);
  const [events2, setEvents2] = useState<any[]>([]);

  useEffect(() => {
    context.subscribe('USER:SIGNUP', (e) => {
      setEvents1((old) => [...old, e]);
    });
    context.subscribe('USER:SIGNIN', (e) => {
      setEvents2((old) => [...old, e]);
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Context1 userName={`User ${events1.length}`} id={Id()} />
        <Context2 userName={`User ${events2.length}`} id={Id()} />
        <div>
          <ul>
            <li><p><strong>USER:SIGNUP</strong></p></li>
            {events1.map((evt: any, i) => (
              <li key={i}>{`Event: ${evt.type} - ${evt.detail?.[1]}`}</li>
            ))}
          </ul>
          <ul>
            <li><p><strong>USER:SIGNIN</strong></p></li>
            {events2.map((evt: any, i) => (
              <li key={i}>{`Event: ${evt.type} - ${evt.detail?.[1]}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
