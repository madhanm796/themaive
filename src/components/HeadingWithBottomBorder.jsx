import React from 'react'

function HeadingWithBottomBorder({heading, color}) {
  return <div className='w-fit flex-col flex justify-center items-center'>
    <h1 className={`font-semibold text-3xl text-${color ? color : 'black'} capitalize text-center`}>{heading}</h1>
    <hr className='w-25 h-2 bg-violet-600 mt-2 rounded-full'/>
  </div>
}

export default HeadingWithBottomBorder