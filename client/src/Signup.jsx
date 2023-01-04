import { useState } from "react";


function Signup() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
	let newSignup = {
		name: name,
		email: email,
		password: password
	}
	fetch("/signup", {
		method: 'POST',
		headers: {'Content-Type' : 'application/json'},
		body: JSON.stringify(newSignup)
	})
		.then((r) => r.json())
		.then(() => addUser(newSignup))
	}

	return (
		<div>
			<h1>Signup!</h1>
			<form onSubmit = {handleSubmit}>
				<h3>Name:</h3>
					<input
						type="text" 
						name="name" 
						placeholder="User Name"
						value={name} 
						onChange={(e) => setName(e.target.value)}
					/>
				<h3>Email:</h3>
					<input  
						type="text" 
						name="email" 
						placeholder="User Email"
						value={email} 
						onChange={(e) => setEmail(e.target.value)}
					/>
				<h3>Password:</h3>
					<input  
						type="password" 
						name="password" 
						placeholder="Password"
						value={password} 
						onChange={(e) => setPassword(e.target.value)}
					/>
				<button type="submit">Submit!</button>
			</form>
		</div>
	);
}

export default Signup