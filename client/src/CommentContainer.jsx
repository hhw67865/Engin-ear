import CommentCard from "./CommentCard"
import {useState} from "react"

const CommentContainer = ({comments, user, post, setComments}) => {

  const [textArea, setTextArea] = useState("")
  const [errors, setErrors] = useState(null)
  
  const commentsArray = comments.map((comment,i)=><CommentCard key={i} comment={comment} user={user} setComments={setComments}/>)

  function handleText (e) {
    setTextArea(e.target.value)
  }

  function createComment (e) {
    e.preventDefault()
    const newComment = {
      post_id: post.id,
      user_id: user.id,
      comment_body: textArea
    }
    fetch('/comments',{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(newComment)
    })
    .then(r=>{
      if (r.ok){
        r.json().then((comment)=>setComments(prev=>[...comments,comment]))
        setErrors(null)
      }
      else {
        r.json().then((obj)=>{
          setErrors(obj.errors)
        })
      }
    })
  }


  return (
    <div className="commentContainer">
        <form id="comment_creation" onSubmit={createComment}>
            <img className="commentProfilePicture" src="" alt=""/>
            <textarea id="comment_area" name="comment_area" rows="2" cols="50" placeholder="Add a comment..." value={textArea} onChange={handleText}>
            </textarea>
            <input type="submit" value="Post"/>
        </form>
        {errors ? errors.map((e,i)=><p key={i}>{e}</p>):null}
        <div className="comment_feed">
            {commentsArray}
        </div>
    </div>
  );
}
export default CommentContainer;