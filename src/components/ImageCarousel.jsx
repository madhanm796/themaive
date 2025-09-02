import React, { useEffect, useState } from 'react'
import one from '../assets/images/work/1.png';
import two from '../assets/images/work/2.png';
import three from '../assets/images/work/3.png';

function ImageCarousel() {

    const images = [
        {id:0, src:one},
        {id:1, src:two},
        {id:2, src:three},
    ];

    const [selectedImage, setSelectedImage] = useState(0);

    const handleNext = ()=> {
        if (selectedImage < images.length - 1) {
            setSelectedImage(selectedImage => selectedImage + 1);
        }
        else {
            setSelectedImage(0);
        }
    }

    const handlePrev = ()=> {
        if (selectedImage > 0) {
            setSelectedImage(selectedImage => selectedImage - 1);
        }
        else {
            setSelectedImage(images.length - 1);
        }
    }

  return (
    <div className='w-full max-h-screen lg:h-full mt-4 lg:mt-0 bg-violet-200 min-h-50 flex flex-col justify-center items-center' style={{
        backgroundImage:`url(${images[selectedImage].src})`,
        backgroundSize:'cover',
        backgroundOrigin:'content-box',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center'
    }}>
        <div className="h-full"></div>

        <div className="flex justify-between items-center w-full h-full">
            <button onClick={handlePrev} className='hover:bg-violet-400 transition-colors p-4 bg-violet-500 text-white text-2xl cursor-default'>
                <i className="fas fa-angle-left"></i>
            </button>
            <button onClick={handleNext} className='hover:bg-violet-400 transition-colors p-4 bg-violet-500 text-white text-2xl cursor-default'>
                <i className="fas fa-angle-right"></i>
            </button>
        </div>

        <div className="w-full h-full flex justify-center items-end">
            {
                Array.from(images).map((item, index) => (
                    <span className={`m-2 w-2 h-2 rotate-45 ${selectedImage == index ? 'bg-violet-600' : 'bg-violet-300'} flex justify-center items=center text-black`} key={index}>

                    </span>
                ))
            }
        </div>

    </div>
  )
}

export default ImageCarousel