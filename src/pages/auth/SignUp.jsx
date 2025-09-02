import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import FormHeading from '../../components/FormHeading'
import BackButton from '../../components/BackButton'
import InputField from '../../components/InputField'
import VSpacer from '../../components/VSpacer';
import PrimaryButton from '../../components/PrimaryButton';
import { Link } from 'react-router-dom'

function SignUp() {

  const styles = {
    main: 'lg:w-120 lg:py-5'
  }

  return (
    <section className='w-screen min-h-screen h-full px-4'>
      <AuthHeader></AuthHeader>

      <main className={`mt-5 p-2 w-full h-full mx-auto my-auto flex justify-between items-start ${styles.main}`}>
        <BackButton to={'/'}></BackButton>
        <form action="" className='w-10/12 h-full ms-4'>
        <FormHeading title={'It’s great to have you here!'}></FormHeading>
        <h5 className="text-lg text-gray-700 mt-5">
          At Maive, we value every user. You're not just signing up — you're joining a creative movement.
        </h5>
        <VSpacer height={2}></VSpacer>
        <InputField hint={'Your name'} type={'text'}></InputField>
        <VSpacer height={1}></VSpacer>
        <InputField hint={'Your email'} type={'email'}></InputField>
        <VSpacer height={1}></VSpacer>
        <InputField hint={'password'} type={'password'}></InputField>
          <VSpacer height={1}></VSpacer>
        <InputField hint={'confirm password'} type={'password'}></InputField>
        <VSpacer height={2} />
        <PrimaryButton title={'Continue'}></PrimaryButton>
        <VSpacer height={2} />
        <h6 className='text-black text-center'>Already part of us? <Link className='text-violet-700' to={'/auth/sign-in'}>Sign In</Link></h6>
      </form>
      </main>

    </section>
  )
}

export default SignUp