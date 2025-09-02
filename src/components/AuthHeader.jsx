import React from 'react'
import BrandLogo from '../components/BrandLogo';
import { Link } from 'react-router-dom';

function AuthHeader({title, to}) {
  return (
    <header className='w-12/12 lg:px-16 lg:py-4 flex justify-between items-center'>
        <BrandLogo></BrandLogo>

        {title && <Link to={to} className='text-violet-500'>{title}</Link>}

    </header>
  )
}

export default AuthHeader