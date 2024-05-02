import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'
//import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function Tweet(props) {

const user = useSelector((state) => state.user.value)

return(
<div class="tweet">
    <div class="tweetInfos">
        {props.author.firstname} / {props.author.username} / {props.created_at}
    </div>
    <div class="tweetContent">
        <p>{props.content}</p>
    </div>
    <div class="tweetActions">
        <LikeButton /> {user.username === props.author.username && <DeleteButton /> }
    </div>
</div>
)

}

export default Tweet