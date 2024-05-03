//import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets'
import { Provider } from 'react-redux';
import TweetBar from './TweetBar'
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
    <div>
        <h1>Home</h1>
          <TweetBar loadTweets={loadTweets}/>
          <LastTweets loadTweets={loadTweets}/>
    </div>
  );
}

export default Home;
