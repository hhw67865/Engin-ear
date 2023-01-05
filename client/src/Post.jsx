import CommentContainer from "./CommentContainer"
import {useState} from "react"

const Post = ({post,user}) => {


  
  const [comments, setComments] = useState([])
  const [hideComments, setHideComments] = useState(true)


  function showComments () {
    fetch(`/posts/${post.id}/comments`)
    .then(r=>r.json())
    .then(obj => {
      setComments(obj)
    })
    .then(()=>setHideComments(false))
    
  }

  return (
    <div className="postCard">
        <div className="user">
            <img className="profilePicture" src={post.user.profile_picture} alt={post.user.name}/>
            <h2> {post.user.name} </h2>
            <p> {post.user.follower_count} followers </p>
            <p> {post.title} </p>
        </div>
        <div className="post">
            <p> {post.post_body} </p>
            <img className="postPicture" src={post.picture_url} alt={post.title}/>
        </div>
        <div className="footer">
            {/* likes */}
            <p onClick={showComments}> {post.comments.length} Comments </p>
        </div>
        {hideComments ? null: <CommentContainer comments={comments} user={user}/> }
        
        

    </div>
  );
}
export default Post;