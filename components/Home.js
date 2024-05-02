import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets'
import { Provider } from 'react-redux';


function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <LastTweets />
        </h1>
      </main>
    </div>
  );
}

export default Home;
