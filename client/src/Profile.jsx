function Profile({user}) {

  // console.log(user)

  return (
    <div className="profile">
      <h1>{user.name}</h1>
      <h2>{`(${user.pronouns})`}</h2>
      <img id="profile-picture" src={user.profile_picture} alt={`${user.name}`}/>
      <p>{user.job_title}</p>
      <p>{user.location}</p>
      {user.employer ? <p>Works at: {user.employer}</p> : null}
      {/* <p>Works at: {user.employer}</p> */}
      <p>Contact Info: {user.email}</p>
      {/* map of professional Links */}

      {/* open to work checkbox */}
      {/* map of posts */}
      <p># followers</p>
      <p># following</p>
    </div>
  )
}

export default Profile