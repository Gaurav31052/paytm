import React,{useState} from 'react'
import { Heading } from './heading'
import InputBox from './InputBox'
import Button from './Button'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SendMoney = () => {
  const [SearchParams] = useSearchParams();
  const id =SearchParams.get("id");
  const name =SearchParams.get("name");
  const [amount,setAmount] = useState("")
  const notify = () => toast("Wow so easy!");
  return (
    <div className='h-screen flex justify-center items-center bg-slate-700'>
    <div className=' w-1/3 border-2 rounded-lg flex-col flex p-4 bg-slate-200'>
    <Heading label={"Send Money"}/>
    
    <div className=' mt-10 mb-4 flex items-center gap-3'>
        <div className=' w-14 h-14 rounded-full p-4 bg-gray-400 flex justify-center items-center'><span className='text-white font-bold text-xl'>{name[0].toUpperCase()}</span></div>
        <div className='text-lg font-semibold'>{name.toUpperCase()}</div>
    </div>
    <div className='mb-5'><InputBox onChange={e=>{setAmount(e.target.value)}} label={"Amount (in Rs)"} placeholder={"Enter amount"}/></div>
    <Button onClick={()=>{
      axios.post('http://localhost:3000/api/v1/account/transfer',{
        to:id,
        amount
      },{
        headers:{
          Authorization : "Bearer "+localStorage.getItem("token")
        }
      })
    }} label={"Initiate Transfer"}/>
    <button onClick={()=>{notify}}>notify</button>
    </div>
      
    </div>
  )
}

export default SendMoney
