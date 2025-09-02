import React from 'react'
import Header from '../../components/Header'
import PaymentSubHeading from '../../components/PaymentSubHeading';
import PrimaryButton from '../../components/PrimaryButton';
import VSpacer from '../../components/VSpacer';
import { Link } from 'react-router-dom';

function PaymentSucces() {
  return (
    <section className='w-screen min-h-screen'>
        <Header></Header>
        <div className="mx-auto w-11/12 lg:w-2/4 h-full flex lg:py-10 flex-col  justify-center items-center">
            <h2 className="text-center text-2xl lg:text-5xl font-semibold text-green-600 capitalize">Thank you for your purchase!</h2>
            <h5 className="mx-2 lg:m-0 text-center text-lg lg:text-2xl mt-3 text-gray-800 font-medium">We've recevied your payment and your product is now ready.</h5>
            <VSpacer height={3} />
            <div className="mx-auto w-full lg:w-auto">
              <PaymentSubHeading title={'product name'} content={'Android notes app with firebase'}></PaymentSubHeading>
              <PaymentSubHeading title={'transaction id'} content={'2456-56846-56984-56891'}></PaymentSubHeading>
              <PaymentSubHeading title={'amount paid'} content={'₹1,528.98'}></PaymentSubHeading>
              <PaymentSubHeading title={'payment method'} content={'UPI'}></PaymentSubHeading>
              <PaymentSubHeading title={'purchase date & time'} content={'07/06/2025 10:40:01 AM'}></PaymentSubHeading> 
              <VSpacer height={2}></VSpacer>
              <div className="w-auto lg:w-80">
                <PrimaryButton title={'Download now'}></PrimaryButton>
              </div>
              <VSpacer height={5}></VSpacer>
              <h6 className='text-black text-center mb-10 lg:m-0 lg:text-auto'>Need help? <Link to={''} className='text-violet-600'>themaive.in@gmail.com</Link></h6>
             </div>
        </div>

        

    </section>
  )
}

export default PaymentSucces