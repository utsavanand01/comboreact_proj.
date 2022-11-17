import React, {useState} from 'react'
import './Css_Auth.css'
import axios from 'axios'
import { Link } from "react-router-dom";
import Header from '../SplitScreens/Header';
import Footer from '../SplitScreens/Footer';

const RegisterScreen = () => {

    const [ email, setEmail ] = useState()
	const [ password, setPassword ] = useState()
    const [ contact, setContact ] = useState()
    const [ name, setName ] = useState()
	const [data, setData] =  useState()

    const handleSubmit = (e) => {
		e.preventDefault()
		axios.post("http://127.0.0.1:8000/api/register",{name:name,contact:contact,email:email, password:password})
		.then(data=> setData(data))
		console.log(data.status)
	}
	
  return (
    <>
    <div className="LazyContainerz">
	 <Header/>
       <div className="boxx">
		<form autoComplete="off" className='formz'>
			<h2>Register</h2>
			<div className="inputBoxx">
				<input type="text" required="required" onChange={(e)=>setName(e.target.value)}/>
				<span>Name</span>
				<i></i>
			</div>
			<div className="inputBoxx">
				<input type="text" required="required" onChange={(e)=>setContact(e.target.value)}/>
				<span>Contact</span>
				<i></i>
			</div>
			<div className="inputBoxx">
				<input type="text" required="required" onChange={(e)=>setEmail(e.target.value)}/>
				<span>Email</span>
				<i></i>
			</div>
			<div className="inputBoxx">
				<input type="text" required="required" onChange={(e)=>setPassword(e.target.value)}/>
				<span>Password</span>
				<i></i>
			</div>
			{/* <input onClick={handleSubmit} className="" type="submit" value="Register"/> */}
			<div className="btn btn-success py-2 mt-4" onClick={handleSubmit}>Register</div>
			<div className="div text-white">
			<div className="flex w-100">
			<div className="text-center w-full">
			   <span><small>Already have an account ?</small></span>
			   <Link to="/login" >
			   <span className='fs-5 px-2' style={{ color:"#45f3ff"}}><small>Login</small></span>
			   </Link>
			 </div>	
			</div>	
			</div>
		</form>
	   </div>
    </div>
	<Footer/>
    </>
  )
}

export default RegisterScreen