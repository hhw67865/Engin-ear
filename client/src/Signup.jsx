import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Signup () {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState(null)

	let navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault()

		let newSignup = {
			name: name,
			email: email.toLowerCase(),
			password: password
		}

		fetch("/signup", {
			method: 'POST',
			headers: {'Content-Type' : 'application/json'},
			body: JSON.stringify(newSignup)
		})
		.then((r) => {
			if (r.ok) {
				navigate('/login')
				setErrors(null)
			}
			else {
				r.json()
				.then(obj => {setErrors(obj.errors)})
			}
		})
	}

	return (
		<div className="center-text">
			<h1>Signup!</h1>
			<form onSubmit={handleSubmit}>
				<h3 className="label">Name:</h3>
					<input
						type="text" 
						name="name" 
						// placeholder="First & Last Name"
						value={name} 
						onChange={(e) => setName(e.target.value)}
					/>
				<h3 className="label">E-mail:</h3>
					<input  
						type="text" 
						name="email" 
						// placeholder="E-mail Address"
						value={email} 
						onChange={(e) => setEmail(e.target.value)}
					/>
				<h3 className="label">Password:</h3>
					<input  
						type="password" 
						name="password" 
						// placeholder="Password"
						value={password} 
						onChange={(e) => setPassword(e.target.value)}
					/>
					<br />
				{errors ? errors.map((error, i)=><p key={i} >{error}</p>) : null}
        <br />
				<input className='button-submit-form' type="submit" value="Submit!" />
			</form>
		</div>
	);
}

export default Signup