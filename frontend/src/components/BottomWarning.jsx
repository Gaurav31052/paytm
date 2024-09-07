import React from 'react'
import { Link } from 'react-router-dom'

const BottomWarning = ({label,buttonText,to}) => {
  return (
    <div className='flex font-semibold w-full justify-center text-white'>
      <div>{label}</div>
      <Link className="pointer underline pl-1 cursor-pointer text-red-500" to={to}>{buttonText}</Link>
    </div>
  )
}

export default BottomWarning
