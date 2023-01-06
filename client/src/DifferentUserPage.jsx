import {useState} from 'react'

const DifferentUserPage = ({diffUser, user}) => {

  const [follow, setFollow] = useState(diffUser.followers.filter((follower)=>follower.id===user.id).length>0)
  const proLinks = diffUser.professional_links.map((eachLinkObj,i) => {
    return (
    <div  key={i}>
      <a href={eachLinkObj.link}>{eachLinkObj.name}</a>
      <br /> 
    </div>
    )
  })

  function handleFollow () {
    if(follow){
      fetch('/follows/delete',{
        method:"DELETE",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({follower_id:user.id, followed_id:diffUser.id})
      })
      .then(r=>{
        if (r.ok) {
          setFollow(false)
        }
      })
    }
    else {
      fetch('/follows', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({follower_id:user.id, followed_id:diffUser.id})
      })
      .then(r=>{
        if (r.ok) {
          setFollow(true)
        }
      })
    }
    
  }


  return (
    <div className="profile">
        <div id="profile-card-div">
          <button id="follow-button" onClick={handleFollow}>{follow?"Unfollow":"Follow"}</button>
          <h1>{diffUser.name}</h1>
          <h2>{`(${diffUser.pronouns})`}</h2>
          <img id="profile-picture" src={diffUser.profile_picture?diffUser.profile_picture:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={`${diffUser.name}`}/>
          <h2>{diffUser.job_title}</h2>
          {diffUser.employer ? <p>Works at: {diffUser.employer}</p> : null}
          {diffUser[`open_to_work?`] ? <><h3>✅ Open to Work!</h3></> : null }
          <h3>{diffUser.location}</h3>
          {proLinks}
          <a href={`mailto:${diffUser.email}`}>E-mail</a>
          <p>{diffUser.posts.length} posts</p>
          <p>{diffUser.follower_count} followers</p>
          <p>{diffUser.following_count} following</p>
        </div>
    </div>
  );
}
export default DifferentUserPage;