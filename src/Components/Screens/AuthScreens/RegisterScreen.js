import React, {useState} from 'react'
import './Css_Auth.css'
import axios from 'axios'
const LoginScreen = () => {

    const [ email, setEmail ] = useState()
	const [ password, setPassword ] = useState()
    const [ contact, setContact ] = useState()
    const [ name, setName ] = useState()
    const [ confirmpass, setConfirmPass] = useState()

    const handleSubmit = (e) => {
		e.preventDefault()
		axios.post("http://127.0.0.1:8000/api/register",{email:email, password:password})
		.then(res=> console.log(res))
	}
  return (
    <>
    <div className="LazyContainer">
       <div className="box">
		<form autoComplete="off">
			<h2>Sign in</h2>
			<div className="inputBox">
				<input type="text" required="required" onChange={(e)=>setEmail(e.target.value)}/>
				<span>Name</span>
				<i></i>
			</div>
			<div className="inputBox">
				<input type="text" required="required" onChange={(e)=>setEmail(e.target.value)}/>
				<span>Contact</span>
				<i></i>
			</div>
			<div className="inputBox">
				<input type="text" required="required" onChange={(e)=>setEmail(e.target.value)}/>
				<span>Email</span>
				<i></i>
			</div>
			<div className="inputBox">
				<input type="text" required="required" onChange={(e)=>setEmail(e.target.value)}/>
				<span>Password</span>
				<i></i>
			</div>
			<div className="inputBox">
				<input type="password" required="required" onChange={(e)=>setPassword(e.target.value)}/>
				<span>Confirm Password</span>
				<i></i>
			</div>
			<div className="links">
				<a href="#">Forgot Password ?</a>
				<a href="#">Signup</a>
			</div>
			<input onClick={handleSubmit} type="submit" value="Login"/>
		</form>
	   </div>
    </div>
    </>
  )
}

export default LoginScreen