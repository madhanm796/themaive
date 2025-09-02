import React, { useState } from 'react'
import angleDown from '../assets/icons/angle-down.png';
import angleUp from '../assets/icons/angle-up.png';

function FaqItem({item}) {

    console.log(item);

    const [extended, setExtended] = useState(false);

    const handleExtended = () => {
        setExtended(extended => !extended);
    }

  return (
    <div className={`${extended ? 'h-full' : 'h-auto'}`}>
        <div className="flex justify-between">
            <h2 className="text-black text-xl font-semibold">{item.id+1}. {item.question}</h2>
            <button onClick={handleExtended} className={`${extended ? 'rotate-180' : 'rotate-0'} text-violet-600 text-2xl px-5 cursor-pointer bg-violet-50`}> 
               <i className="fas fa-angle-down"></i>
            </button>
        </div>

        {extended && 

            <div className="my-4 w-full h-full text-black p-4 bg-violet-50">
                <Item {...item}></Item>
            </div>
        
        }

    </div>
  )
}

function Item ({id, title, items, conclusion}) {
    return (
        <>
            {title && <h4 className='text-black font-medium text-[1rem]'>{title}&nbsp;:</h4>}
            {items && <ul className='w-auto mt-2'>
                    {items.map((item, index) => (
                        <li key={index} className='ms-4 mt-2 font-normal'><span className='font-bold'>+&nbsp;</span>{item.content}</li>
                    ))}
                </ul>}
                {conclusion && <p className='mt-2 font-medium'>{conclusion}</p>}
        </>
    )
}

export default FaqItem