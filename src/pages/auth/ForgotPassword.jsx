import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import BackButton from '../../components/BackButton'
import FormHeading from '../../components/FormHeading'
import VSpacer from '../../components/VSpacer'
import InputField from '../../components/InputField'
import PrimaryButton from '../../components/PrimaryButton'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {

  const navigate = useNavigate();

const styles = {
    main: 'lg:w-120 lg:py-5'
  }

  return (
    <section className='w-screen min-h-screen h-full px-4'>
      <AuthHeader></AuthHeader>

      <main className={`mt-5 p-2 w-full h-full mx-auto my-auto flex justify-between items-start ${styles.main}`}>
        <BackButton to={'/auth/sign-in'}></BackButton>
        <form action="" className='w-10/12 h-full ms-4'>
        <FormHeading title={'Forgot password?'}></FormHeading>
        <h5 className="text-lg text-gray-700 mt-5">
         Don’t worry about losing your password — we’ve got your back.
        </h5>
        <VSpacer height={2}></VSpacer>
        <InputField hint={'Your email'} type={'email'}></InputField>
        <VSpacer height={2}></VSpacer>
        <PrimaryButton title={'Send reset code'} onClick={()=>{
          navigate('/auth/reset-code');
        }}></PrimaryButton>
        <VSpacer height={2} />
      </form>
      </main>

    </section>
  )
}

export default ForgotPassword