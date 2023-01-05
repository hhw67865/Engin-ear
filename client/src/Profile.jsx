import {useState} from "react"
import {useNavigate} from 'react-router-dom'

function Profile({user, setUser}) {

  let navigate = useNavigate();

  const [errors, setErrors] = useState(null)
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [profileFormData, setProfileFormData] = useState({
    name: "",
    pronouns: "",
    location: "",
    email: "",
    job_title: "",
    employer: "",
    [`open_to_work?`]: false,
    profile_picture: "",
  })

  // console.log(user)

  const proLinks = user.professional_links.map((eachLinkObj,i) => {
    return (
    <div  key={i}>
      <a href={eachLinkObj.link}>{eachLinkObj.name}</a>
      <br /> 
    </div>
    )
  })

  function handleToggleUpdate() {
    setShowUpdateProfile(!showUpdateProfile)
    setProfileFormData({
      name: user.name,
      pronouns: user.pronouns,
      location: user.location,
      email: user.email,
      job_title: user.job_title,
      employer: user.employer,
      [`open_to_work?`]: user[`open_to_work?`],
      profile_picture: user.profile_picture
  })
  }

  function handleChange(e) {
		const key = e.target.name;
		const value = e.target.value;
    const checked = e.target.checked;

		setProfileFormData({...profileFormData,
			[key]: key===`open_to_work?`? checked:value,
		});
	}

  function handleUpdateSubmit(e) {
    e.preventDefault();
    console.log(profileFormData)
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(profileFormData)
    })
    .then(r=>{
      if (r.ok) {
        r.json().then(obj=>setUser(obj))
        setErrors(null)
        setShowUpdateProfile(false)
    
      }
      else {
        r.json().then((obj)=>{
          setErrors(obj.errors)
        })
      }
    })
    

  }
  
  return (
    <div className="profile">
      <button id="update-profile-toggle" onClick={handleToggleUpdate}>{showUpdateProfile ? 'Hide Update View' : 'Update Profile'}</button>
      {showUpdateProfile ? 
      <div id="profile-form-div">
        <form id="update-profile-form" onSubmit={handleUpdateSubmit}>
          <h2>Name:</h2>
            <input
							className='profile-form-inputs'
							type='text'
							name='name'
							value={profileFormData.name}
							onChange={handleChange}
						/>
          <h2>Pronouns:</h2>
            <input
							className='profile-form-inputs'
							type='text'
							name='pronouns'
							value={profileFormData.pronouns}
							onChange={handleChange}
						/>
          <h2>E-mail:</h2>
            <input
							className='profile-form-inputs'
							type='text'
							name='email'
							value={profileFormData.email}
							onChange={handleChange}
						/>
          <h2>Location:</h2>
            <input
							className='profile-form-inputs'
							type='text'
							name='location'
							value={profileFormData.location}
							onChange={handleChange}
						/>
          <h2>Job Title:</h2>
            <input
							className='profile-form-inputs'
							type='text'
							name='job_title'
							value={profileFormData.job_title}
							onChange={handleChange}
						/>
          <h2>Employer:</h2>
            <input
							className='profile-form-inputs'
							type='text'
							name='employer'
							value={profileFormData.employer}
							onChange={handleChange}
						/>
          <h2>Open To Work?</h2>
            <input
							className='profile-form-inputs'
							type='checkbox'
							name='open_to_work?'
							checked={profileFormData[`open_to_work?`]}
							onChange={handleChange}
						/>
          <h2>Profile Picture:</h2>
            <input
							className='profile-form-inputs'
							type='text'
							name='profile_picture'
							value={profileFormData.profile_picture}
							onChange={handleChange}
						/>
            <br />
            <br />
            <input id='button-update-form' type='submit' value='Update Profile!' />
        </form></div> : null }
      <div id="profile-card-div">
        <h1>{user.name}</h1>
        <h2>{`(${user.pronouns})`}</h2>
        <img id="profile-picture" src={user.profile_picture} alt={`${user.name}`}/>
        <h2>{user.job_title}</h2>
        {user.employer ? <p>Works at: {user.employer}</p> : null}
        {user[`open_to_work?`] ? <><h3>✅ Open to Work!</h3></> : null }
        <h3>{user.location}</h3>
        {proLinks}
        <a href={`mailto:${user.email}`}>E-mail</a>
        <p># posts</p>
        <p>{user.follower_count} followers</p>
        <p>{user.following_count} following</p>
      </div>
    </div>
    
  )     
}

export default Profile