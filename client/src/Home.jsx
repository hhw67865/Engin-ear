import Post from "./Post"

function Home() {

  return (
    <div>
      <select name="filter">
        <option value="job posts">Job Posts</option>
        <option value="inspiration">Inspiration</option>
        <option value="mood swings">Mood Swings</option>
        <option value="blogs">Blogs</option>
        <option value="projects">Projects</option>
      </select>
      <h3>Create a Post!</h3>
      <form id="post_creation">
        <label for="title">Title</label>
        <input type="text" name="title"/>
        <label for="picture">Picture Url</label>
        <input type="text" name="picture"/>
        <textarea id="post_area" name="post_area" rows="4" cols="50" placeholder="What's on your mind?">
        </textarea>
        <input type="submit" value="Post"/>
      </form>
      <div id="post_feed">

      </div>
    </div>
  )
}

export default Home