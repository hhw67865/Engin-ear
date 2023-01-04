import CommentContainer from "./CommentContainer"

const Post = () => {
  return (
    <div className="postCard">
        <div className="user">
            <img className="profilePicture" src="" alt=""/>
            <h2> Name </h2>
            <p> follower number </p>
            <p> description or title </p>
        </div>
        <div className="post">
            <p> post </p>
            <img className="postPicture" src="" alt=""/>
        </div>
        <div className="footer">
            {/* likes */}
            <p> number of comments clickable </p>
        </div>
        <CommentContainer/>
        

    </div>
  );
}
export default Post;