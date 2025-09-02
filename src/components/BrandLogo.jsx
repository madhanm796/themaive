import React from 'react'
import brandLogo from '../assets/icon.png';

function BrandLogo() {
  return (
    <div className="brand flex justify-start items-center">
            <img src={brandLogo} alt="" className="w-15" />
            <h1 className='text-2xl font-semibold text-black'>Maive</h1>
        </div>
  )
}

export default BrandLogo