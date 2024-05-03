//import { useEffect, useState } from 'react';
import Tweet from './Tweet'
import { useDispatch, useSelector } from 'react-redux';
import { setTweets } from '../reducers/tweets';
import { useEffect, useState } from 'react';


const LastTweets = (props) => {
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    const test = async () => {
        await props.loadTweets()
    }
    useEffect(() => {
        test()
    }, [])
    //await props.loadTweets()
    let tweetsData = useSelector((state) => state.tweets.value)
    tweetsData = [...tweetsData].sort((x, y) => Date.parse(y.created_at) - Date.parse(x.created_at))


    const tweets = tweetsData.map((tweet, i) => {
        return(<Tweet key={i} _id={tweet._id} author={tweet.author} content={tweet.content} loadTweets={props.loadTweets} created_at={tweet.created_at}/>)
    })

    return(
        <>
        {error}
        {tweets}
        </>
    )
}

export default LastTweets