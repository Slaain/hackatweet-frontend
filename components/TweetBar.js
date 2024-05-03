import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function TweetBar(props) {
    const dispatch = useDispatch();
    const [tweet, setTweet] = useState('');
    const [error, setError] = useState('');
    const user = useSelector((state) => state.user.value);


    const handleSubmit = () => {
        const data = {
            token: user.token,
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
        <input onChange={(e) => setTweet(e.target.value)} value={tweet}/>
        <button onClick={() => handleSubmit()}>Tweet</button>
        <span class="error">{error}</span>
    </div>
    )
}

export default TweetBar