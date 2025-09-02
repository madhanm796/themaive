import React from 'react'
import Header from '../../components/Header'
import ViewProductCarousel from '../../components/ViewProductCarousel'

import product from '../../services/product.json';
import PrimaryButton from '../../components/PrimaryButton';
import VSpacer from '../../components/VSpacer';
import ButtonWithText from '../../components/ButtonWithText';

import listImage from '../../assets/icons/list-style.png';
import Footer from '../../components/Footer';
import DividerWithBackground from '../../components/DividerWithBackground';

function ViewDetails() {


  return (
    <>
    <section className='pb-10'>
      <Header></Header>
      <main className='container mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start'>
        <ViewProductCarousel></ViewProductCarousel>
        <article className='text-black w-11/12 lg:w-8/12 min-h-screen p-4'>
        <h2 className="capitalize text-3xl font-semibold">{product.name}</h2>
         <p className="text-lg font-medium w-[90%] my-2">{product.description}</p>

        <Section {...product.key_features}></Section>
        <Section {...product.tech_stack}></Section>
        <Section {...product.perfect_for}></Section>
        <Section {...product.deliverables}></Section>
        <Section {...product.pricing}></Section>
        <Section {...product.timeline}></Section>

        <VSpacer height={2.5}></VSpacer>

        <div className="w-auto max-w-screen h-full lg:max-w-9/12 flex justify-center lg:justify-evenly items-center flex-col lg:flex-row ">
          <div className="w-fit my-5 lg:my-0 lg:w-80">
            <PrimaryButton title={"Buy now"} ></PrimaryButton>
          </div>
            <div className="w-fit lg:w-80 text-white">
            <ButtonWithText title={"Request customization"} ></ButtonWithText>
          </div>
        </div>

        </article>
      </main>
    </section>
      <DividerWithBackground></DividerWithBackground>
    <Footer></Footer>
    </>
  )
}


function Section({ title, content }) {
  return (
    <section>
      {title && <h2 className='font-bold text-[1.2em] my-2' >{title}</h2>}
      <ul className='px-4' style={{
        listStyleImage:`url(${listImage})`
      }}>
        {content.map(({ id, title: itemTitle, description }) => (
          <li key={id} className='my-1 lg:mx-4 text-lg '>
            {itemTitle ? <strong className='font-[600]'>{itemTitle}: </strong> : null}
            <span className='font-normal'>{description}</span>
          </li>
        ))}
      </ul>
    </section>
  );

}

export default ViewDetails