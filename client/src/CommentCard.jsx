const CommentCard = ({comment, user}) => {

  function deleteComment () {
    fetch(`/comments/${comment.id}`,{
      method: "DELETE"
    })
  }

  return (
    <div className="commentCard">
        <img className="commentProfilePicture" src={comment.user.profile_picture} alt={comment.user.name}/>
        <div className="comment">
            <h3>{comment.user.name}</h3>
            <p> {comment.comment_body} </p>
        </div>
        {user.id === comment.user.id ? <button onClick={deleteComment}>X</button>: null}
    </div>
  );
}
export default CommentCard;