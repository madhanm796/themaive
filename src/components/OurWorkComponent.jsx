import React from 'react'
import ImageCarousel from './ImageCarousel'

import listImage from '../assets/icons/list-style.png';
import ButtonWithText from './ButtonWithText';
import PrimaryButton from './PrimaryButton';
import VSpacer from './VSpacer';

function OurWorkComponent() {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto lg:border-2 lg:border-violet-100 lg:rounded-2xl h-auto min-h-7/12 flex justify-between items-center flex-col lg:flex-row'>
            <div className="h-full w-full">
                <ImageCarousel></ImageCarousel>
            </div>
            <div className="w-full lg:min-w-6/12 lg:min-h-auto md:overflow-y-auto  mt-5 lg:m-0 lg:p-5 text-black flex flex-col justify-start items-center">
                <div className="my-2">
                    <h2 className="text-2xl font-bold capitalize">Student course management system</h2>
                    <VSpacer height={1}></VSpacer>
                    <h4 className="font-normal text-lg">
                        A desktop-based Java application designed for final-year students. It allows faculty to manage student details, attendance, grades, and reports efficiently.
                    </h4>
                    <h5 className="font-semibold mt-4">Technologies used</h5>
                    <h6 className="font-medium mt-2 px-5">Java, Swing, MySQL, JDBC</h6>

                    <h5 className="font-semibold mt-4">What We Delivered</h5>

                    <ul className='w-auto lg:bg-violet-100 mt-3 p-5 lg:px-10' style={{
                        listStyleImage:`url(${listImage})`
                    }}>
                        <li className='font-medium'>Full-featured desktop application</li>
                        <li className='font-medium'>Clean and responsive UI</li>
                        <li className='font-medium'>Source code + project report + user guide</li>
                        <li className='font-medium'>Code explanation session for the client</li>
                    </ul>
                </div>

                <div className="text-white w-full lg:w-2/4 h-auto mt-5">
                    <PrimaryButton title={'Contact us'}></PrimaryButton>
                </div>

            </div>
        </div>
    )
}

export default OurWorkComponent