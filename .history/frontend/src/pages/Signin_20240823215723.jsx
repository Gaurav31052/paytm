import React, { useState } from 'react'
import { Heading } from '../components/heading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'

const Signin = () => {
  const [username,setUserName]= useState("")
  const [password,setPassword]= useState("")
  return (
    <div className='h-screen flex justify-center p-24 bg-gray-700 items-center'>
    <div className=' w-1/3 h-auto border-2 border-gray-500 rounded-lg flex flex-col gap-3 bg-gray-300 p-3'>
    <Heading label={"Signin"}/>
    <InputBox onChange={e=>{setUserName(e.target.value)}} label={"UserName"} placeholder={"Email"}/>
    <InputBox onChange={e=>{setPassword(e.target.value)}} label={"Password"} placeholder={"Password"}/>
    <Button onClick={()=>{
      const response = awaiaxios.post('http://localhost:3000/api/v1/user/signin',{
        username,
        password
      })
    }} label={"signin"}/>
    <BottomWarning label={"Create a new account?"} buttonText={"signup"} to={"/signup"}/>

    </div>
      
    </div>
  )
}

export default Signin
