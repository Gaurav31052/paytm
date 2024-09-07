import React, { useState } from 'react'
import { Heading } from '../components/heading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Background from '../components/background'

const Signup = () => {
    const [firstname,setFirstName] =useState("");
    const [lastname,setLastName] =useState("");
    const [username,setUserName] =useState("");
    const [password,setPassword] =useState("");
    const navigate = useNavigate();
  return (
    <div className='h-screen relative bg-green-500'>
    <Background/>
    <div style={{left:590}} className='absolute z-30 top-1/4 w-1/4 h-auto rounded-lg flex flex-col gap-5 bg-neutral-950 p-3 items-center shadow-lg shadow-neutral-700/100'>
    <Heading label={"Signup"}/>
    <InputBox onChange={(e)=>{
        setFirstName(e.target.value);
    }} label={"FirstName"} placeholder={"FirstName"}/>
    <InputBox onChange={e=>{
        setLastName(e.target.value);
    }} label={"LastName"} placeholder={"LastName"}/>
    <InputBox onChange={e=>{
        setUserName(e.target.value);
    }} label={"UserName"} placeholder={"Email"}/>
    <InputBox onChange={e=>{
        setPassword(e.target.value);
    }} label={"Password"} placeholder={"Password"}/>
    <Button onClick={async()=>{
        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
            firstname,
            lastname,
            username,
            password
        })
        localStorage.setItem("token",response.data.token);
        navigate("/dashboard")
    }
    } label={"signup"}/>
    <BottomWarning label={"Already have an account?"} buttonText={"signin"} to={"/signin"}/>

    </div>
      
    </div>
  )
}

export default Signup
