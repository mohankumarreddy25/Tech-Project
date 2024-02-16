import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }

    const passwordHandler = (e)=>{
        setPassword(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault();

        localStorage.setItem("email",email)
        localStorage.setItem("password",password)

        let emailData = localStorage.getItem("email",email)
        let passwordData = localStorage.getItem("password",password)
        console.log(emailData,passwordData)

        if(emailData === email && passwordData === password ){
            alert("Login successfull")
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
            navigate("/")
        }
        else if(email === "" && password === ""){           
            alert("Login Failed , plese enter valid details")
        }
        else if(emailData !== email){
           
            alert("please enter valid email address")
        }
        else if(passwordData !== password){
           
            alert("please enter valid password")
        }
        
        else{
           
            alert("Login Failed , plese enter valid details")
        }

    }

    return(
        <div>        
                <div className="container mt-5">
                <div className="grid">
                    <div className="row d-flex justify-content-center"  style={{marginTop:"120px"}}>
                        <div className="col-0 col-sm-6 col-md-6 col-lg-1">
                           
                            <img className="img-fluid login-png" src={require('../Components/Login')} alt="" />
                        </div>
                        <div className=" text-center  col-8 p-2  col-md-6 col-lg-3 " style={{ border: '1px solid white', backgroundColor: 'dark' }}>
                            <div className="form">
                                <div>
                                    <div>
                                             <img style={{marginTop:"-40px"}} className="img-fluid col-md-4 col-2 mb-3"  alt="" />
                                        </div>
                                    <h1 className="text-light mb-5">Login</h1>
                                    <input className="form-control w-70 mb-3 " required placeholder="Email" type="email" name="email" value={email} onChange={emailHandler} />    
                                    <input className="form-control w-70 mb-3 " placeholder="Password" type="password" name="password" value={password} onChange={passwordHandler} />    
                                    <button type="submit" onClick={submitHandler} className="btn btn-dark text-warning w-75 mb-3">Login</button>
                                    <p className="text-light">Don't have an  <br /> account? <button className="text-warning btn btn-sm " onClick={()=>{navigate('/')}}>Register</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>)}
            export default Login;



