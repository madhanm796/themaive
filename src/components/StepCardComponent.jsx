import React, { useEffect, useState } from 'react'

import stepIcon from '../assets/icons/step.png';
import axios from 'axios';

function StepCardComponent({item}) {

  const [icon, setIconData] = useState(null);

  useEffect(()=>{
    axios.get(item.image).then(res => {
      if (res.status == 200) {
        setIconData(res.data);
      }
    }).catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div className='w-full lg:w-full lg:max-w-100 flex flex-col justify-center items-center lg:items-start my-4 lg:my-10'>
        <h4 className="w-fit text-sm text-violet-600 font-semibold p-2 py-1 bg-violet-200"># Step {item.id}</h4>
        
        <div className="flex justify-start items-center text-black w-full flex-col lg:flex-row">
            <div className="w-25 h-25 m-5 mx-0 overflow-hidden rounded-2xl">
                <img src={item.image} className="w-full h-full object-contain" />
            </div>
            <h2 className='text-center lg:text-left w-full max-w-80 text-2xl font-semibold mx-4'>{item.title}</h2>
        </div>

    </div>
  )
}

export default StepCardComponent