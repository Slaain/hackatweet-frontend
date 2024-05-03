import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import styles from '../styles/TweetB.module.css'
function TweetBar(props) {
    const dispatch = useDispatch();
    const [tweet, setTweet] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        const data = {
            token: '4vL6wNRPRaUcZtl72jZ3iN3nRrmk8WW-',
            content: tweet
        }
        fetch('http://localhost:3000/tweets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            data.result ? props.loadTweets() : setError('Error: could not post tweet')
        })
    }

    return (
    <div>
        <input onChange={(e) => setTweet(e.target.value)} value={tweet} className={styles.barreOk} placeholder="What's Up ?"/>
        <button onClick={() => handleSubmit()} className={styles.barre}>Tweet</button>
        <span class="error">{error}</span>
    </div>
    )
}

export default TweetBar