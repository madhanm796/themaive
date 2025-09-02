import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import listIcon from '../../assets/icons/list-style.png';
import BackButton from '../../components/BackButton';

import product from '../../services/checkout_product.json';
import PrimaryButton from '../../components/PrimaryButton';
import VSpacer from '../../components/VSpacer';

function CheckOut() {
  return (
   <section className="min-h-screen lg:h-screen overflow-x-hidden">
    <Header></Header>
  <div className="w-11/12 lg:container mx-auto flex justify-start lg:justify-center items-center flex-col lg:flex-row h-10/12">
    <ProductDetailsComponent></ProductDetailsComponent>
    <div className="hidden lg:block h-10/12 w-1 bg-violet-600"></div>
    <CheckoutDetails></CheckoutDetails>
  </div>
</section>
  )
}
function Heading ({title}) {
  return (
    <h4 className="font-[600] text-sm text-violet-600 uppercase my-4">{title}</h4>
  )
}

function ProductDetailsComponent () {
  return (
     <>
     <div className="hidden lg:block self-start lg:my-10 mx-10 lg:mx-0">
      <BackButton to={`/products/${product.id}`}></BackButton>
    </div>
    <div className="w-full lg:w-2/4 h-full  lg:px-10 lg:p-10">
      <Heading title={'product title'}></Heading>
      <h2 className="mx-4 text-3xl font-semibold text-black capitalize">
        {product.name}
      </h2>
      <Heading title={'description'}></Heading>
      <h5 className="mx-4 text-[1em] font-normal text-black">{product.description}</h5>
      <Heading title={'Key features'}></Heading>
      <ul className='text-black px-4 lg:px-10' style={{
        listStyleImage:`url(${listIcon})`
      }}>
        {product.features.map((item)=> (
          <li className='m-2' key={item.title}>
            <span className='font-semibold'>{item.title}&nbsp;:&nbsp;</span>{item.description}
          </li> 
        ))}

      </ul>
    </div>
    </>
  )
}

function CheckoutDetails () {
  return (
    <div className="w-full lg:w-2/4 h-full flex justify-center items-center px-2 lg:px-10 flex-col">
      <ul className='lg:mx-10 my-5 w-full'>
        <li className='my-2 text-black flex justify-between items-center'>
          <h4 className="font-medium text-lg">Sub total</h4>
          <span className='font-semibold text-xl'>₹{product.price}</span>
        </li>
                <li className='my-2 h-auto text-black flex justify-between items-center'>
          <div className="flex justify-center items-center">
            <h4 className="font-medium text-lg">Convenience fee </h4>
            <div className="group relative hover:bg-violet-400 bg-violet-500 p-2.5 py-1.5 rounded-full mx-2 text-white flex justify-center items-center">
              <i className="fas fa-info text-sm"></i>
              <span className='hidden group-hover:block transition-colors absolute top-[10px] left-[15px] z-10 w-100 h-20 p-2 text-white bg-violet-600 rounded-[8px] self-center'>This fee is collected by Razorpay for handling and processing the payment securely.</span>
            </div>
          </div>
          
          <span className='font-semibold text-xl'>2%</span>
          
        </li>

        <li>
          <span className='block lg:hidden transition-colors z-10 w-auto h-20 p-2 text-white bg-violet-600 rounded-[8px] self-center'>This fee is collected by Razorpay for handling and processing the payment securely.</span>
        </li>

        <li className='text-black flex justify-between items-center font-semibold my-10'>
          <h2 className='capitalize text-3xl'>total amount payable</h2>
          <h2 className='text-3xl'>₹{product.afterFee}</h2>
        </li>

      </ul>

      <form className='w-full flex justify-center items-center lg:px-5'>
        <input type="checkbox" name="agree" id="agree" className='border-2 border-violet-600 outline-0'/>
        <h5 className='text-black w-full mx-2 lg:mx-5'>I have read and agree to the&nbsp;
          <Link className='text-violet-600 font-medium underline' to={''}>Terms & Conditions</Link>,&nbsp;
          <Link className='text-violet-600 font-medium underline' to={''}>Privacy Policy</Link>,&nbsp;
           <Link className='text-violet-600 font-medium underline' to={''}>Return & Refund Policy</Link>, 
          and&nbsp;<Link className='text-violet-600 font-medium underline' to={''}>Shipping & Delivery Policy</Link>&nbsp;of<span className='font-semibold'>&nbsp;Maive</span>.</h5>

      </form>
      <VSpacer height={2}></VSpacer>
      <div className="w-auto lg:w-2/4 h-auto">
        <PrimaryButton onClick={()=>{}} title={'Proceed with Razorpay'} ></PrimaryButton>
      </div>
      <VSpacer height={2}></VSpacer>

    </div>
  )
}

export default CheckOut