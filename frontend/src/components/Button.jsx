import React from 'react'

const Button = ({label,onClick}) => {
  return (
    <div className='w-full flex justify-center'>
      <button onClick={onClick} className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2  border text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 bg-gray-300">
  {label}
</button>
    </div>
  )
}

export default Button;
