import React from 'react'
import ButtonWithText from '../../components/ButtonWithText'
import PrimaryButton from '../../components/PrimaryButton'
import { useNavigate } from 'react-router-dom'

function ProductCard() {

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate('/product/details');
    }

  return (
    <div className="w-screen lg:max-w-100 lg:w-full min-h-40 h-full border-2 border-gray-200  rounded-[25px] px-5 py-4 my-2 lg:m-2">
        <h2 className="font-semibold text-xl lg:text-lg text-black capitalize">Android notes app with firebase</h2>
        <h5 className="text-[1em] lg:text-sm font-medium my-2 text-gray-800">
            A clean and modern note-taking mobile application built using Java and Firebase. Features include user authentication, cloud sync, offline support, and dark mode.
        </h5>

        <ul className='text-black my-5'>
            <li className='text-[1rem]'><span className='font-semibold '>Tech Stack&nbsp;:&nbsp;</span>
                Java, Firebase Auth, Firestore  
            </li>
            <li className='text-[1rem]'><span className='font-semibold '>Tech Stack&nbsp;:&nbsp;</span>
                Java, Firebase Auth, Firestore  
            </li>
            <li className='text-[1rem]'><span className='font-semibold '>Tech Stack&nbsp;:&nbsp;</span>
                Java, Firebase Auth, Firestore  
            </li>
        </ul>

        <h4 className="font-semibold text-2xl text-black ">₹1,499.99</h4>
        <h6 className="font-normal text-gray-700">Delivery: 2-4 days</h6>

        <ul className='w-full flex justify-around items-center my-5'>
            <li onClick={handleViewDetails} className='w-full mx-2 bg-black rounded-full text-white transition-colors hover:text-black hover:bg-white border-2 border-black'>
                <button className='w-full px-5 py-3 capitalize'>View details</button>
            </li>
            <li className='w-full mx-2 bg-violet-600 rounded-full text-white transition-colors hover:text-black hover:bg-white border-2 border-violet-600'>
                <button className='w-full px-5 py-3 capitalize'>Buy now</button>
            </li>
        </ul>

    </div>
  )
}

export default ProductCard