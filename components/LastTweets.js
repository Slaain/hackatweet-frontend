import { useEffect, useState } from 'react';
import Tweet from './Tweet'

function LastTweets() {

    const [tweetsData, setTweetsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
        .then(response => response.json())
        .then(data => {
            setTweetsData(data.data)
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