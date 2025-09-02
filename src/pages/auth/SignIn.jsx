import React, { useRef } from 'react'
import AuthHeader from '../../components/AuthHeader'
import FormHeading from '../../components/FormHeading'
import BackButton from '../../components/BackButton'
import InputField from '../../components/InputField'
import VSpacer from '../../components/VSpacer';
import PrimaryButton from '../../components/PrimaryButton';
import { Link } from 'react-router-dom'
import axios from 'axios'

function SignIn() {
  
  const hostURL = "http://localhost:8989/user/login"
  const formData = new FormData();

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");


  const styles = {
    main: 'lg:w-120 lg:py-5'
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    
    if (email && password === confirmPassword) {
      const body = {
        email: email,
        password: password,
        confirmPassword: confirmPassword
      }
      axios.post(
        hostURL,
        body
      ).then(res => {
        console.log(res.statusText)
      }).catch(e => {
        console.log(e.message);
      })
    }
    
  }
  return (
    <section className='w-screen min-h-screen h-full px-4'>
      <AuthHeader title={'Forgot password?'} to={'/auth/forgot-password'}></AuthHeader>

      <main className={`mt-5 p-2 w-full h-full mx-auto my-auto flex justify-between items-start ${styles.main}`}>
        <BackButton to={'/auth/sign-up'}></BackButton>
        <form className='w-10/12 h-full ms-4' onSubmit={handleSubmit} id='sign-in'>
        <FormHeading title={'Good to have you back'}></FormHeading>
        <h5 className="text-lg text-gray-700 mt-5">
          Your journey with Maive continues — let's create something awesome.
        </h5>
        <VSpacer height={2}></VSpacer>
        <InputField hint={'Your email'} type={'email'} ref={emailRef}></InputField>
        <VSpacer height={1}></VSpacer>
        <InputField hint={'password'} type={'password'} ref={passwordRef}></InputField>
          <VSpacer height={1}></VSpacer>
        <InputField hint={'confirm password'} type={'password'} ref={confirmPasswordRef}></InputField>
        <VSpacer height={2} />
        <PrimaryButton type={'submit'} title={'Continue'}></PrimaryButton>
        <VSpacer height={2} />
        <h6 className='text-black text-center'>Not yet joined with us? <Link className='text-violet-700' to={'/auth/sign-up'}>Sign Up</Link></h6>
      </form>
      </main>

    </section>
  )
}

export default SignIn