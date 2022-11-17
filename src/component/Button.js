import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <div className='bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700 w-[115px]' onClick={onClick}>
      {children}
    </div>
  )
}

export default Button