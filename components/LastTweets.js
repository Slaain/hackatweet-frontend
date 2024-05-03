//import { useEffect, useState } from 'react';
import Tweet from './Tweet'
import { useDispatch, useSelector } from 'react-redux';
import { setTweets } from '../reducers/tweets';
import { useEffect, useState } from 'react';


function LastTweets() {
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.result ? dispatch(setTweets(data.data)) : setError('Cannot fetch data')
        })
    }, []);

    const tweetsData = useSelector((state) => state.tweets.value);

    const tweets = tweetsData.map((tweet, i) => {
        return(<Tweet key={i} author={tweet.author} content={tweet.content} created_at={tweet.created_at}/>)
    })

    console.log('tweets', tweets)

    return(
        <>
        {error}
        {tweets}
        </>
    )
}

export default LastTweets