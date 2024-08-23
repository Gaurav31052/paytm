import React from 'react'

const InputBox = ({label,placeholder,onChange}) => {
  return (
    <div className='gap-1'>
      <div className=' font-semibold font-mono'>{label}</div>
        <input onChange={onChange} placeholder={placeholder} className=' border-2 border-black rounded-md w-full px-2'/>
    </div>
  )
}

export default InputBox
