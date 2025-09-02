import React, { useState } from 'react'

import img1 from '../assets/images/work/1.png';
import img2 from '../assets/images/work/2.png';
import img3 from '../assets/images/work/3.png';

function ViewProductCarousel() {

    const images = [
        {id:0, source:img1},
        {id:1, source:img2},
        {id:2, source:img3}
    ];

    const [selectedImage, setSelectedImage] = useState(0);

    const handleSelectedImage = (index) => {
        setSelectedImage(index);
    }


  return (
    <aside className='w-full lg:max-w-4/12 lg:mx-10 p-2 min-h-2/4 h-full flex justify-center items-center flex-col-reverse lg:flex-row'>
        <ul className='w-auto h-full lg:m-2 flex lg:flex-col'>
            {
            images.map((item, index)=> (
                <li className={`outline-0 lg:my-2 border-4 ${selectedImage == item.id ? 'scale-100 border-violet-600' : 'scale-95'}`} key={index} onClick={()=>handleSelectedImage(item.id)}>
                    <img src={item.source} alt="" className='lg:w-15 lg:h-15 w-auto h-10'/>
                </li>
            ))
            }
        </ul>
        <div className="w-full h-full bg-violet-50 mb-4 lg:mb-0">
            <img src={images[selectedImage].source} alt="" className='object-contain min-w-50 w-full h-full lg:min-h-100 outline-0 border-0'/>
        </div>
    </aside>
  )
}

export default ViewProductCarousel