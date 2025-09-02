import React, { useState } from 'react'

function InputField({hint, type, ref}) {

    const [secureEntry, setSecureEntry] = useState(type.toLowerCase() === 'password');
    const [show, setShow] = useState(false);

    const handleShow = ()=> {
        setShow(show => !show);
    }

  return (
    <div className="flex">
        <input type={show ? 'text' : type} 
        placeholder={hint}
        ref={ref}
        required={true}
        className='p-2 w-11/12 outline-0 border-0 font-medium placeholder:text-black placeholder:capitalize text-black'/>
        
        {secureEntry && <button type='button' className='text-violet-500' onClick={handleShow}>
            {show  ? 
                <span>hide</span>
                :     
                <span>show</span>
            }
            </button>
        }

    </div>
  )
}

export default InputField