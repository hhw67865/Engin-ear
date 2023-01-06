import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

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

  let navigate = useNavigate();
  
  function goToCommenterProfile () {
    navigate(`profile/${comment.user.id}`)
  }

  return (
    <div className="commentCard">
      <div className="user-post-header-1" onClick={goToCommenterProfile}>
        <div>
          <img className="commentProfilePicture" src={comment.user.profile_picture} alt={comment.user.name}/>
        </div>
        <div id="flex-wrap">
          <div>
            <h3>{comment.user.name}</h3>
          </div>
          <div>
            <p> {comment.comment_body} </p>
          </div>
          <div>
            <p>commented {comment.created_at_ago}</p>
          </div>
          <div>
            {user.id === comment.user.id ? <button id="delete-comment-button" onClick={deleteComment}>Delete Comment</button>: null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CommentCard;