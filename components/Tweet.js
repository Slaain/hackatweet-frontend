import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'
//import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function Tweet(props) {

const user = useSelector((state) => state.user.value)
console.log(props);

return(
<div class="tweet">
    <div class="tweetInfos">
        {props.author.firstname} / {props.author.username} / {props.created_at}
    </div>
    <div class="tweetContent">
        <p>{props.content}</p>
    </div>
    <div class="tweetActions">
        <LikeButton /> {user.username === props.author.username && <DeleteButton _id={props._id} loadTweets={props.loadTweets}/> }
    </div>
</div>
)

}

export default Tweet