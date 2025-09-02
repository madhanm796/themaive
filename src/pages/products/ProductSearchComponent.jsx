import React from 'react'
import HeadingWithBottomBorder from '../../components/HeadingWithBottomBorder'
import Categories from '../../components/Categories'
import SearchComponent from './SearchComponent'
import ProductCard from './ProductCard'

function ProductSearchComponent() {
  return (
    <section className='container mx-auto min-h-screen h-auto lg:py-10 flex justify-start items-center flex-col'>
        <HeadingWithBottomBorder heading={'Search Projects'}></HeadingWithBottomBorder>
        <SearchComponent></SearchComponent>
        <Categories></Categories>
        <div className="flex justify-center lg:justify-start items-center w-11/12 lg:w-10/12 mx-auto min-h-full mt-10 flex-wrap">
            {[0, 1, 2, 3, 4].map((item)=> (
                <ProductCard key={item}></ProductCard>
            ))}
        </div>
    </section>
  )
}

export default ProductSearchComponent