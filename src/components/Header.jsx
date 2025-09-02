import React, { useEffect, useState } from 'react'
import brandLogo from '../assets/icon.png';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import barsIcon from '../assets/icons/bars.png';
import closeIcon from '../assets/icons/close.png';

function Header() {

    const [toggled, settoggled] = useState(false);

    const links = [
        {id:0, title: "home", route:'/'},
        {id:1, title: "services", route:'/#our-services'},
        {id:2, title: "products", route:'/products'},
        {id:3, title: "our work", route:'/#our-work'},
        {id:4, title: "how it works", route:'/#how-it-works'},
        {id:5, title: "contact us", route:'/#contact-us'}
    ];

    const styles = {
        header: 'lg:bg-transparent lg:justify-between lg:items-center lg:py-4 lg:flex-row lg:px-20 lg:m-0',
        nav: 'lg:rounded-full lg:w-fit lg:visible lg:flex lg:p-4 lg:justify-center lg:items-center',
        list: 'lg:text-sm lg:mt-0',
        getStarted: 'lg:block lg:m-0'
    }

    const handleToggle = () => {
        settoggled(toggled => !toggled);
    }

  return (
    <header className={`w-screen py-5 ${toggled ? 'bg-white' : 'bg-transparent'} m-auto flex justify-center items-start flex-col ${styles.header}`}>
        <BrandLogo></BrandLogo>
    
            <nav className={`${toggled ? 'block' : 'hidden'} w-screen relative px-4 backdrop:blur-2xl ${styles.nav}`} style={{backgroundColor:'#FFFFFF75'}}>
            <ul className='lg:flex'>
                {
                    links.map((item)=> (
                        <li key={item.id} className={`list-none text-lg mt-4 ${styles.list} mx-4`}>
                            <Link to={item.route} className='font-semibold text-gray-900 capitalize hover:text-violet-600 transition-colors'>
                            {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
        

        <button onClick={handleToggle} className="text-black visible lg:hidden absolute text-2xl top-9 right-5">

            {
                toggled == true ?
                    <img src={closeIcon} alt="" className='w-5 h-5' />
                    :
                    <img src={barsIcon} alt="" className='w-5 h-5' />

            }
        </button>

        <a href="/auth/sign-up" className={`${styles.getStarted} self-center ${toggled ? 'block' : 'hidden'} rounded-full transition-colors bg-transparent border-2 mt-5 hover:bg-violet-500 hover:text-white border-violet-600 text-black p-3 py-2 font-semibold`}>Get started</a>
    </header>
  )
}

export default Header