import React from 'react'
import brandLogo from '../assets/icon.png';
import instagramLogo from '../assets/instagram.png';
import VSpacer from './VSpacer';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className='w-screen min-h-2/4 lg:h-2/4 h-auto bg-black '>
      <section className="container mx-auto w-full h-full flex justify-between items-start flex-col">
      <div className="w-full flex justify-center items-center flex-col lg:flex-row">
        <section className=' w-full mx-4 lg:m-0 lg:w-2/4'>
          <div className="w-full flex justify-center items-center lg:items-start flex-col">
           <div className="brand flex justify-start items-center w-full ">
            <img src={brandLogo} alt="" className="w-25" />
            <h1 className='text-4xl font-semibold text-white'>Maive</h1>
          </div>
          <h2 className="font-semibold text-xl text-white w-auto text-center mx-2 lg:mx-0 lg:text-left">From Concept to Code — Seamlessly.</h2>
          {/* <a href="https://instagram.com/themaive.in/" target='_blank' className="flex justify-start items-center my-5">
            <img src={instagramLogo} alt="" className='w-8' />
            <span className='m-2'>themaive.in</span>
          </a> */}
        </div>
      </section>
      <hr className='block lg:hidden my-5 w-full border-2 border-violet-600 rounded-full'/>
      <section className='w-full lg:w-2/4 h-full flex justify-start items-start flex-col lg:flex-row'>
        <div className="flex justify-start items-start w-full h-full py-5 flex-col">
          <div className="p-2">
            <h2 className="text-xl pb-1 font-semibold capitalize">Useful links
            </h2>
              <hr className='w-20 h-1 rounded-full bg-violet-500 border-0'/>
          </div>

          <ul className='mx-4 text-[1rem] lg:text-sm hover:text-'>
            <li className='font-semibold mt-2 hover:text-gray-400 transition-colors'><a href="/">Home</a></li>
            <li className='font-semibold mt-2 hover:text-gray-400 transition-colors'><a href="/#our-services">Services</a></li>
            <li className='font-semibold mt-2 hover:text-gray-400 transition-colors'><a href="/products">Products</a></li>
            <li className='font-semibold mt-2 hover:text-gray-400 transition-colors'><a href="/#our-work">Our work</a></li>
            <li className='font-semibold mt-2 hover:text-gray-400 transition-colors'><a href="/#about-the-founder">About the founder</a></li>
            <li className='font-semibold mt-2 hover:text-gray-400 transition-colors'><a href="/#how-it-works">How it works</a></li>
          </ul>

        </div>
        <div className="w-full h-full py-5 flex justify-start items-start flex-col" id='contact-us'>
            <div className="p-2">
              <h2 className="text-xl pb-1 font-semibold capitalize">Contact us
              </h2>
                <hr className='w-20 h-1 rounded-full bg-violet-500 border-0'/>
          </div>
          <ul className='mx-4 text-[1rem] lg:text-sm cursor-default'>
            <li className='font-semibold my-2'>Email : <a target='_blank' rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=themaive.in@gmail.com" className='font-medium text-violet-500'>themaive@gmail.com</a></li>
            <li className='font-semibold my-2'>WhatsApp: <span className="font-medium text-violet-500">+91 9384727902</span></li>
            <li className='font-semibold my-2'>Location : <span className='font-medium text-violet-500'>Chennai, India.</span></li>
          </ul>
        </div>
      </section>
      </div>
      <section className='w-full'>
        <hr className='w-full border-2 border-violet-600 rounded-full'/>
      <div className="flex justify-center items-center">
        <ul className='w-full flex flex-col lg:flex-row mx-auto justify-center items-start lg:items-center py-2'>
          <li  className='transition-colors text-md my-1 text-gray-400 hover:text-gray-100 capitalize px-2 lg:border-r-2 lg:border-gray-700'>
            <Link to={'/terms-and-conditions'}>terms and conditions</Link>
          </li>
          <li className='transition-colors text-md my-1 text-gray-400 hover:text-gray-100 capitalize px-2 lg:border-r-2 lg:border-gray-700'>
            <Link to={'/privacy-policy'}>privacy policy</Link>
          </li>
          <li className='transition-colors text-md my-1 text-gray-400 hover:text-gray-100 capitalize px-2 lg:border-r-2 lg:border-gray-700'>
            <Link to={'/return-and-refund'}>return and refund policy</Link>
          </li>
          <li className='transition-colors text-md my-1 text-gray-400 hover:text-gray-100 capitalize px-2'>
            <Link to={'/shipping-and-delivery'}>shipping and delivery policy</Link>
          </li>
        </ul>
      </div>
      <hr className='w-full border-2 border-violet-600 rounded-full'/>
      <p className="text-sm text-gray-500 text-center text-wrap w-full my-5">
        This website is built using <a href="https://reactjs.org" className="underline">React</a> and <a href="https://tailwindcss.com" className="underline">Tailwind CSS</a>.  
        Icon resources are provided by <a href="https://fontawesome.com/" className="underline">Font Awesome</a> and <a href="https://www.flaticon.com/" className="underline">Flaticon.com</a> by various authors, used under their respective licenses.
      </p>
      </section>
      </section>
    </footer>
  )
}

export default Footer