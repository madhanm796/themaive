import React, { useState } from 'react'
import filterIcon from '/filter.png';

function Categories() {

    const categories = [
        {
            id: 0,
            title: 'All',
        },
        {
            id: 1,
            title: 'software',
        },
        {
            id: 2,
            title: 'backend',
        },
        {
            id: 3,
            title: 'frontend',
        },
        {
            id: 4,
            title: 'java',
        },
        {
            id: 5,
            title: 'spring boot',
        },
    ];

    const [selected, setSelected] = useState(0);
    const [showFilter, setShowFilter] = useState(false);

    const handleSetSelected = (item) => {
        setSelected(item.id);
    }
    const handleShowFilter = () => {
        setShowFilter(showFilter => !showFilter);
    }

    return (
        <div className="container mx-auto mt-10 justify-between items-center hidden lg:flex ">
            <ul className='w-11/12 lg:w-auto text-black flex justify-center items-center cursor-default overflow-x-auto'>
                {
                    categories.map((item)=> (
                        <li onClick={()=>handleSetSelected(item)} className={`mx-1 p-4 py-2 ${selected == item.id ? 'bg-violet-600 text-white' : 'bg-violet-50'} lg:text-sm rounded-full capitalize`} key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
            <div onClick={handleShowFilter} className="relative p-2 bg-gray-50 hover:bg-violet-100">
                <img src={filterIcon} alt="" className='w-5 h-5'/>

                <ul className={`cursor-default bg-white transition-colors absolute top-10 -left-40 text-black border-2 border-gray-50 ${showFilter ? 'block' : 'hidden'}`}>
                    <li className='w-40 my-1 px-2 py-2 lg:text-sm hover:bg-gray-100'>Sort by Name</li>
                    <li className='w-40 my-1 px-2 py-2 lg:text-sm hover:bg-gray-100'>Sort by Date</li>
                    <li className='w-40 my-1 px-2 py-2 lg:text-sm hover:bg-gray-100'>Sort by Price</li>
                </ul>

            </div>
        </div>
    )
}

export default Categories