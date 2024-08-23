import React, { useEffect } from "react"
import axios from "axios"
export const Balance = ({ value }) => {

    useEffect(async ()=>{
        const response = await axios.get('http://localhost:3000/api/v1/account/balance',{
            headers:{
              Authorization : "Bearer "+localStorage.getItem("token")
            }
          })
          setValue
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