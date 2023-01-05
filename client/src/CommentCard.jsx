import {useState} from 'react'

const CommentCard = ({comment, user, setComments}) => {

  

  function deleteComment () {
    fetch(`/comments/${comment.id}`,{
      method: "DELETE"
    })
    .then(()=>{
      setComments(prev=>prev.filter((element)=>element.id !== comment.id)
      )
    })
  }

  
  return (
    <div className="commentCard">
        <img className="commentProfilePicture" src={comment.user.profile_picture} alt={comment.user.name}/>
        <div className="comment">
            <h3>{comment.user.name}</h3>
            <p> {comment.comment_body} </p>
            <p>{comment.created_at_ago}</p>
        </div>
        {user.id === comment.user.id ? <button onClick={deleteComment}>X</button>: null}
    </div>
  );
}
export default CommentCard;