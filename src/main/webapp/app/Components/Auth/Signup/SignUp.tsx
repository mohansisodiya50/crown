import React from 'react'

export default function SignIn() {
	return (
		<>
			<input type="text" placeholder="Username" name="username" />
			<input type="text" placeholder="Email" name="email" />
			<input type="password" placeholder="Password" name="password" />
			<div className='strenth'>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				Password Strenth
			</div>
			<input type="password" placeholder="Confirm Password" name="password-repeat" />
			<input type="checkbox" /><span className='terms'> I have read and agree to the <strong>Terms and Policy</strong></span>
		</>
	)
}
