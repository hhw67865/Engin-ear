import {useState} from 'react';

function Login({loginUser}) {
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const {email, password} = loginData

  function handleLoginSubmit (e) {
    e.preventDefault()

    loginUser(loginData)

    setLoginData({
      email: "",
      password: "",
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
    <div>
      <h1>Login here!</h1>
      <form id='login' className="form-container" onSubmit={handleLoginSubmit}>
        <br /> 
        <label> Email:
        <input 
          className="form-inputs" 
          type="text" 
          name="email"
          value={loginData.email}
          onChange={handleChange} 
        />
        </label>
        <br /> 
        <label> Password:
        <input 
          className="form-inputs" 
          type="password" 
          name="password"
          value={loginData.password}
          onChange={handleChange} 
        />
        </label>
        <br /> 
        <input className='button-submit-form' type="submit" value="Login!" />
      </form>
    </div>
  )
}

export default Login