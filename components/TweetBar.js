import { useDispatch } from 'react-redux';
import { addTweet } from '../reducers/tweets';

function TweetBar() {
    const dispatch = useDispatch();
    const [tweet, setTweet] = useState('');
    const [error, setError] = useState('');


    const tweetPosted = (tweet) => {
        dispatch(addTweet(tweet))
        setTweet('')
        setError('')
    }

    const handleSubmit = () => {
        fetch('http://localhost:3000/tweets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            data.result ? tweetPosted(tweet) : setError('Error: could not post tweet')
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