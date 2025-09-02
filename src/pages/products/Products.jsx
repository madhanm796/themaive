import React, { useState } from 'react'
import Header from '../../components/Header'
import VSpacer from '../../components/VSpacer'
import PrimaryButton from '../../components/PrimaryButton'
import BackgroundParticle from '../../components/BackgroundParticle'
import ProductSearchComponent from './ProductSearchComponent'
import Footer from '../../components/Footer'

function Products() {

    return (

        <section className='w-screen min-h-2/4'>
            <Header></Header>
            <Banner></Banner>

            <BackgroundParticle></BackgroundParticle>

            <ProductSearchComponent></ProductSearchComponent>
            <Footer></Footer>
        </section>


    )
}

function Banner() {
    return (
        <section className='min-h-screen h-auto flex justify-around items-center flex-col container mx-auto lg:py-10'>
            <div className="w-full self-center flex flex-col justify-center items-center">
                <h2 className="font-semibold text-black text-4xl w-[90%] lg:text-7xl lg:mt-10 lg:w-[75%] text-center text-wrap">
                    Explore Our Custom-Built
                    Software Products
                </h2>
                <h5 className='text-black text-xl lg:text-2xl mt-10 w-[80%] lg:w-[50%] text-center'>
                    From academic projects to enterprise-ready tools, find what suits your need.
                </h5>
            </div>
            <BannerButton></BannerButton>
        </section>
    )
}

function BannerButton() {

    const [selected, setSelected] = useState(0);
    const buttons = [
        {
            id: 0,
            title: 'Final Year Project',
        },
        {
            id: 1,
            title: 'Coporate Tools',
        }
    ]

    const handleSetSelected = (item) => {
        setSelected(item.id)
    }

    return (
        <ul className='rounded-full p-0.5  flex flex-col lg:flex-row justify-between items-center w-auto bg-transparent' style={{ backgroundColor: '#FFFFFF50' }}>
            {
                buttons.map((item) => (
                    <li key={item.id} className={`m-1 ${selected == item.id ? 'text-white font-medium' : 'text-black font-normal'}`}>
                        <button onClick={() => { handleSetSelected(item) }} className={`rounded-full w-60 h-15 p-5 flex justify-center items-center transition-colors
                             ${selected == item.id ? 'bg-violet-600' : 'bg-gray-50 hover:bg-violet-50'}`}>{item.title}</button>
                    </li>
                ))
            }
        </ul>
    )
}


export default Products