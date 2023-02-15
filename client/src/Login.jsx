import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

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
      email: email.toLowerCase(), 
      password
    }

		fetch (`/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		.then(res => {
      if(res.ok) {
        res.json().then(user => {
          setUser(user)
          navigate(`/`)
        })
      } else {
        res.json().then(obj => setErrors(obj.error))
      }
		})
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
    <div className="center-text">
      <h1>Login!</h1>
      <form id='login' className="form-container" onSubmit={onSubmit}>
        <h3 className="label">E-mail:</h3>
        <input 
          className="form-inputs" 
          type="text" 
          name="email"
          value={email}
          onChange={handleChange} 
        />
        <h3 className="label">Password:</h3>
        <input 
          className="form-inputs" 
          type="password" 
          name="password"
          value={password}
          onChange={handleChange} 
        />
        <br />
        {errors ? <div>{errors}</div> : null}
        <br />
        <input className='button-submit-form' type="submit" value="Login!" />
      </form>
    </div>
  )
}

export default Login;