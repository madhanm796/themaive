import React from 'react'

function PaymentSubHeading({title, content}) {
  return (
    <>
    <h6 className="my-2 text-sm lg:text-[1rem] text-violet-600 uppercase font-normal">{title}</h6>
    <h2 className="mx-2 text-lg lg:text-xl text-black font-medium capitalize mb-4">{content}</h2>
    </>
  )
}

export default PaymentSubHeading