import React, { useState } from 'react'
import { Heading } from '../components/heading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [firstname,setFirstName] =useState("");
    const [lastname,setLastName] =useState("");
    const [username,setUserName] =useState("");
    const [password,setPassword] =useState("");
    const navigate = useNavigate();
  return (
    <div className='h-screen flex justify-center p-24 bg-gray-700 items-center'>
    <div className=' w-1/3 h-auto p-3 border-2 border-gray-500 rounded-lg flex flex-col gap-3 bg-gray-300'>
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
