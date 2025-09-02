import React from 'react'

function WhyCard({ item, isLast }) {

    const style = isLast ? 'lg:justify-center lg:items-center lg:p-4 lg:flex-row' : 'max-w-100';

    return (
        <div className={`${style} m-2 flex w-full mx-2 flex-col items-start p-4 justify-center`}>
            <div className='w-15 h-15 bg-violet-600 rounded-full flex justify-center items-center'>
                <h2 className="font-semibold text-2xl text-white">{item.id + 1}</h2>
            </div>

            <div className={`${isLast ? 'lg:w-2/4' : ''}`}>
                    <h2 className={`${isLast ? 'lg:ms-4 lg:my-0 lg:w-fit w-60 my-4' : 'w-60  my-4'} text-2xl text-black font-bold capitalize`}>{item.title}</h2>
                <p className={`
                    ${isLast ? 'lg:ms-4' : 'w-80'} text-m font-medium text-gray-700`}>{item.description}</p>
            </div>
        </div>
    )
}

export default WhyCard