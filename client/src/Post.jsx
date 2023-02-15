import CommentContainer from "./CommentContainer"
import {useState, useEffect} from "react"
import {useNavigate} from 'react-router-dom'

const Post = ({post,user}) => {

  const [comments, setComments] = useState([])
  const [hideComments, setHideComments] = useState(true)
  const [noUser, setNoUser] = useState(false)

  let navigate = useNavigate();

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

  const tagsArray = post.post_tags.map((e,i)=><span key={i}> #{e.tag.name} {e.emoji} </span>)
  
  function goToProfile () {
    navigate(`profile/${post.user.id}`)
  }

  return (
    <div className="postCard">
        <div className="user-post-header-1" onClick={goToProfile} style={{cursor:"pointer"}}>
          <div>
            <img className="profilePicture" src={post.user.profile_picture? post.user.profile_picture :"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={post.user.name}/>
          </div>
          <div id="flex-wrap">
            <div>
              <h2> {post.user.name} </h2>
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
            <h3 id="post-title"> {post.title} </h3>
            <p> {post.post_body} </p>
            {post.picture_url ? <div className="postPictureDiv"><img className="postPicture" src={post.picture_url} alt={post.title}/></div> : null}
        </div>
        <div className="footer">
            {/* likes */}
            <p>Tags:{tagsArray}</p>
            <p style={{cursor:"pointer"}} id="show-comments" onClick={showComments}> {post.comments.length === 0 ? 'Add Comment': `View ${post.comments.length} Comments` }</p>
            {hideComments ? null: <CommentContainer comments={comments} user={user} post={post} setComments={setComments} /> }
        </div>
        {noUser?<p>Please Login To See Comments!</p>:null}
    </div>
  );
}
export default Post;