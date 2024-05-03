//import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets'
import { Provider } from 'react-redux';
import TweetBar from './TweetBar'



function Homes() {
  return (
    <div>
        <h1>Home</h1>
          <TweetBar />
          <LastTweets />
    </div>
  );
}

export default Homes;
