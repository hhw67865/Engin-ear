import CommentContainer from "./CommentContainer"
import {useState, useEffect} from "react"

const Post = ({post,user}) => {


  
  const [comments, setComments] = useState([])
  const [hideComments, setHideComments] = useState(true)
  const [noUser, setNoUser] = useState(false)

  useEffect(()=>{
    setComments(post.comments)
  },[])


  function showComments () {
    if (user) {
    fetch(`/posts/${post.id}/comments`)
    .then(r=>r.json())
    .then(obj => {
      setComments(obj)
    })
    .then(()=>setHideComments(false))
    }
    else {
       setNoUser(true)
       setTimeout(()=>{setNoUser(false)},4000)
    }
  }

  return (
    <div className="postCard">
        <div className="user-post-header-1">
          <div>
            <img className="profilePicture" src={post.user.profile_picture} alt={post.user.name}/>
          </div>
          <div id="flex-wrap">
            <div>
              <h3> {post.user.name} </h3>
            </div>
            <div>
              <h5>{post.user.job_title}</h5>
            </div>
            <div>
              <h5> {post.user.follower_count} followers </h5>
            </div>
            <div>
              <h5>posted {post.created_at_ago}</h5>
            </div>
          </div>
        </div>
        

        
      
        <div className="post">
            <h3> {post.title} </h3>
            <p> {post.post_body} </p>
            {post.picture_url ? <img className="postPicture" src={post.picture_url} alt={post.title}/> : null}
        </div>
        <div className="footer">
            {/* likes */}
            <p onClick={showComments}> {comments.length} Comments </p>
        </div>
        {hideComments ? null: <CommentContainer comments={comments} user={user} post={post} setComments={setComments}/> }
        {noUser?<p>Please Login To See Comments!</p>:null}
        

    </div>
  );
}
export default Post;