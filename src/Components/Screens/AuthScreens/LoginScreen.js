import React, {useState} from 'react'
import './Css_Auth.css'
import axios from 'axios'
import { Link, Route, Routes } from "react-router-dom";
import Footer from '../SplitScreens/Footer';
import Header from '../SplitScreens/Header';
import swal from 'sweetalert'
const LoginScreen = () => {

    const [email, setEmail] = useState()
	const [ password, setPassword] = useState()
	const [data, setData] =  useState()


    const handleSubmit = (e) => {
		e.preventDefault()
		axios.post("http://127.0.0.1:8000/api/login",{email:email, password:password})
		.then(data=> setData(data))
		.then(()=>{
			if(data.data.status){
				swal
			}
		})
	}
  return (
    <>
    <div className="LazyContainer">
	<Header/>
       <div className="box">
		<form autoComplete="off">
			<h2>Sign in</h2>
			<div className="inputBox">
				<input type="text" required="required" onChange={(e)=>setEmail(e.target.value)}/>
				<span>Email</span>
				<i></i>
			</div>
			<div className="inputBox">
				<input type="password" required="required" onChange={(e)=>setPassword(e.target.value)}/>
				<span>Password</span>
				<i></i>
			</div>
			<div className="links">
				<a href="#">Forgot Password ?</a>
				<Link to="/register">Signup</Link>
			</div>
			<input onClick={handleSubmit} type="submit" value="Login"/>
		</form>
	   </div>
    </div>
	   <Footer/>
    </>
  )
}

export default LoginScreen