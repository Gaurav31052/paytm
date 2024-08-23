import React, { useEffect } from "react"
export const Balance = ({ value }) => {

    useEffect(()=>{
        axios.post('http://localhost:3000/api/v1/account/transfer',{
            to:id,
            amount
          },{
            headers:{
              Authorization : "Bearer "+localStorage.getItem("token")
            }
          })
    })
    return <div className="flex p-5">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}