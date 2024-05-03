import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets'
import { Provider } from 'react-redux';


function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Home</h1>
          <TweetBar />
          <LastTweets />
      </main>
    </div>
  );
}

export default Home;
