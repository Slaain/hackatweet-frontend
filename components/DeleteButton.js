import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


function DeleteButton (props){

    const handleClick = () => {
        let data = {_id: props._id}
        fetch('http://localhost:3000/tweets', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(async data => {
            await props.loadTweets()
        })
    }

    return(
        <div onClick = {() => handleClick()}>
            <FontAwesomeIcon icon={faTrashCan} />
        </div>
    )
}

export default DeleteButton