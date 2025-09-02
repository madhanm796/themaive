import React from 'react'
import Header from '../../components/Header'
import PaymentSubHeading from '../../components/PaymentSubHeading';
import PrimaryButton from '../../components/PrimaryButton';
import VSpacer from '../../components/VSpacer';
import { Link, useNavigate } from 'react-router-dom';

function PaymentFailed() {

    const navigate = useNavigate();

    const handleCheckoutRoute = () => {
        navigate('/order/checkout')
    }

  return (
    <section className='w-screen min-h-screen'>
        <Header></Header>
        <div className="mx-auto w-11/12 lg:w-2/4 h-full flex lg:py-10 flex-col  justify-center items-center">
            <h2 className="text-center text-2xl lg:text-5xl font-semibold text-red-600 capitalize">Oops!, Transaction failed!</h2>
            <h5 className="mx-2 lg:m-0 text-center text-lg lg:text-2xl mt-3 text-gray-800 font-medium">We've found difficulties in receiving your payment.</h5>
            <VSpacer height={3} />
            <div className="mx-auto w-full lg:w-auto">
              <PaymentSubHeading title={'product name'} content={'Android notes app with firebase'}></PaymentSubHeading>
              <PaymentSubHeading title={'attempted amount'} content={'₹1,528.98'}></PaymentSubHeading>
              <PaymentSubHeading title={'purchase date & time'} content={'07/06/2025 10:40:01 AM'}></PaymentSubHeading> 
              <VSpacer height={2}></VSpacer>
              <div className="w-auto lg:w-80">
                <PrimaryButton title={'Go back to checkout'} onClick={handleCheckoutRoute}></PrimaryButton>
              </div>
              <VSpacer height={5}></VSpacer>
              <h6 className='text-black text-center mb-10 lg:m-0 lg:text-auto'>Need help? <Link to={''} className='text-violet-600'>themaive.in@gmail.com</Link></h6>
             </div>
        </div>

        

    </section>
  )
}

export default PaymentFailed