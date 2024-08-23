import React, { useEffect, useState } from "react"
import axios from "axios"
export const Balance = () => {
const [value,setValue] = useState()
    useEffect( ()=>{
        axios.get('http://localhost:3000/api/v1/account/balance',{
            headers:{
              Authorization : "Bearer "+localStorage.getItem("token")
            }
          })
          console.log(response.data)
        //   setValue(response.data.balance)
    },[])
    return <div className="flex p-5">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}