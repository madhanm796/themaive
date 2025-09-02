import React from 'react'

function ButtonWithText({title, icon}) {
  return (
    <a href="#" className='flex justify-center items-center border-2 border-black hover:border-2 hover:border-violet-500 w-max px-8 py-3 rounded-full bg-black text-lg hover:text-black hover:bg-white transition-colors'>
        <span className='mx-2 capitalize'>{title}</span>
        {icon && <i className={`fas fa-${icon}`}></i>}
    </a>
  )
}

export default ButtonWithText