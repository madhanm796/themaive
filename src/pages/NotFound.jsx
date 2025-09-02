import React from 'react'
import AuthHeader from '../components/AuthHeader'
import VSpacer from '../components/VSpacer'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigate } from 'react-router-dom'

function NotFound() {

    const navigate = useNavigate();

  return (
    <section className='flex justify-center items-center flex-col px-4'>
        <AuthHeader></AuthHeader>
        <VSpacer height={5}></VSpacer>
        <div className="w-full h-full flex justify-center items-center flex-col">
            <h1 className="text-9xl lg:text-9xl lg:font-semibold text-violet-600">404</h1>
            <VSpacer height={2}></VSpacer>
            <h4 className='text-black text-2xl w-screen mx-2 mb-10 lg:text-4xl lg:w-4/12 font-medium text-center'>
                Oops! Looks like you’ve wandered into a parallel universe that doesn’t exist.
            </h4>
            <div className="lg:w-fit lg:mt-10">
                <PrimaryButton title={'Go back to earth'} onClick={()=>{navigate('/')}}></PrimaryButton>
            </div>
        </div>
    </section>
  )
}

export default NotFound