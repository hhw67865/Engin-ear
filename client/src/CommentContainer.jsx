import CommentCard from "./CommentCard"

const CommentContainer = () => {
  return (
    <div className="commentContainer">
        <form id="comment_creation">
            <img className="commentProfilePicture" src="" alt=""/>
            <textarea id="comment_area" name="comment_area" rows="2" cols="50" placeholder="Add a comment...">
            </textarea>
            <input type="submit" value="Post"/>
        </form>
        <div className="comment_feed">
            {/* array of CommentCard */}
        </div>
    </div>
  );
}
export default CommentContainer;