import React from 'react'

function SearchComponent() {
  return (
    <form className='w-11/12 lg:w-2/4 mt-10 rounded-full px-2 h-auto flex justify-center items-center border-2 border-violet-400'>
        <i className="text-gray-700 fas fa-search mx-2"></i>
        <input type="text" name="search" id="search" placeholder='Type something...' 
            className='w-full h-12 text-black outline-0 border-0 rounded-full lg:text-[1rem] font-medium placeholder:text-gray-700'
            />
    </form>
  )
}

export default SearchComponent