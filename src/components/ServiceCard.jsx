import React, { useState } from 'react'
import ButtonWithText from './ButtonWithText'
import listImage from '../assets/tick.png';

function ServiceCard({service}) {

  return (
    <div className='m-2 w-80 lg:w-90 bg-white h-120 p-4 py-2 flex justify-around align-center flex-col border-2 border-violet-400 rounded-2xl cursor-default hover:bg-violet-600 transition-colors text-black hover:text-white'>
      <h2 className="my-2 text-2xl font-semibold text-auto capitalize w-60 lg:w-80 ">{service.service}</h2>
      <p className="w-70 lg:w-80 font-normal">{service.description}</p>

      <ul className='w-full py-2'>
       {service.services.map((item) => (
         <li key={item.id} className='my-2 flex justify-start items-start w-full text-m'>
          <img src={listImage} alt="" className="w-5 me-2" />
          {item.title}
        </li>
       ))}

        

      </ul>

        <div className="self-center text-white">
          <ButtonWithText title={"get started now"}></ButtonWithText>
        </div>
    </div>
  )
}

export default ServiceCard