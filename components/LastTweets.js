//import { useEffect, useState } from 'react';
import Tweet from './Tweet'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTweet } from '../reducers/tweets';




function LastTweets() {
    const dispatch = useDispatch();
    //const [tweetsData, setTweetsData] = useState([]);
    const tweetsData = useSelector((state) => state.tweets.value);

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
        .then(response => response.json())
        .then(data => {
            data.data.forEach((tweet) => {
                dispatch(addTweet(tweet))
            })
        })
    }, []);

    console.log(tweetsData)

    const tweets = tweetsData.map((tweet, i) => {
        return(<Tweet key={i} author={tweet.author} content={tweet.content} created_at={tweet.created_at}/>)
    })

    return(
        <>
        {tweets}
        </>
    )
}

export default LastTweets