import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets'
import { Provider } from 'react-redux';
import TweetBar from './TweetBar';
import Image from 'next/image';
import { setTweets } from '../reducers/tweets';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Home() {
  const dispatch = useDispatch();

  // useEffect(() => {
  const loadTweets = () => {
        fetch('http://localhost:3000/tweets')
        .then(response => response.json())
        .then(data => {
            data.result ? dispatch(setTweets(data.data)) : setError('Cannot fetch data')
        })
      }
    // }, []);
  return (
    <div className={styles.contenaire}>
    <div className={styles.contenantLeft}>
    <Image src='/logo.png'
       alt="Logo"
       width={60}
       height={60}
     />
   
    </div>

    <div className={styles.contenantMid}>
        <p className={styles.titre}>Home</p>
          <TweetBar loadTweets={loadTweets}/>
          <LastTweets loadTweets={loadTweets}/>
    </div>

    <div className={styles.contenantRight}>
        <h1>

        </h1>
    </div>
    </div>
  );
}

export default Home;
