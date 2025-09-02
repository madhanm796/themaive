import React from 'react'

function PrimaryButton({title, onClick, type}) {
  return (
    <button className='w-full h-full px-8 py-3 rounded-full text-lg text-white bg-violet-600 transition-colors hover:text-black hover:bg-white border-2 border-violet-600' onClick={onClick} type={type ? type : 'button'}>
        {title}
    </button>
  )
}

export default PrimaryButton