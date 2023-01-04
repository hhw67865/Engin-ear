import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function Login({setUser}) {
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState([])
  let navigate = useNavigate();

  const {email, password} = loginData

	function onSubmit(e) {
    e.preventDefault()

    const user = {
      email, 
      password
    }

    //console.log(user) : this worked

		fetch (`/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		.then(res => console.log(res)
    //   {
		// 	if(res.ok) {
		// 		res.json().then(user => {
    //       setUser(user)
		// 			navigate(`/`)
		// 		})
		// 	} else {
		// 		res.json().then(obj => setErrors(obj.error))
		// 	}
		// }
    )
	}

  function handleChange (e) {
    const key = e.target.name;
    const value = e.target.value;
    
    setLoginData({
     ...loginData,
      [key]: value
    })
  }

  return (
    <div>
      <h1>Login here!</h1>
      <form id='login' className="form-container" onSubmit={onSubmit}>
        <br /> 
        <label htmlFor="email"> Email:
        <input 
          className="form-inputs" 
          type="text" 
          name="email"
          value={email}
          onChange={handleChange} 
        />
        </label>
        <br /> 
        <label htmlFor="password"> Password:
        <input 
          className="form-inputs" 
          type="password" 
          name="password"
          value={password}
          onChange={handleChange} 
        />
        </label>
        <br /> 
        <input className='button-submit-form' type="submit" value="Login!" />
      </form>
      {errors ? <div>{errors}</div> : null}
    </div>
  )
}

export default Login