import React from 'react'
import { Heading } from '../components/heading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const Signin = () => {
  const [username,setUserName]
  return (
    <div className='h-screen flex justify-center p-24 bg-gray-700 items-center'>
    <div className=' w-1/3 h-auto border-2 border-gray-500 rounded-lg flex flex-col gap-3 bg-gray-300 p-3'>
    <Heading label={"Signin"}/>
    <InputBox label={"UserName"} placeholder={"Email"}/>
    <InputBox label={"Password"} placeholder={"Password"}/>
    <Button label={"signin"}/>
    <BottomWarning label={"Create a new account?"} buttonText={"signup"} to={"/signup"}/>

    </div>
      
    </div>
  )
}

export default Signin
