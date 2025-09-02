import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'
import VSpacer from '../components/VSpacer'
import ButtonWithText from '../components/ButtonWithText'
import HeadingWithBottomBorder from '../components/HeadingWithBottomBorder'
import WhyCard from '../components/WhyCard'
import ServiceCard from '../components/ServiceCard'
import DividerWithBackground from '../components/DividerWithBackground'
import Footer from '../components/Footer';
import founderProfile from '../assets/founder.jpg';
import FaqItem from '../components/FaqItem'
import OurWorkComponent from '../components/OurWorkComponent'
import StepCardComponent from '../components/StepCardComponent'

import services from '../services/services_data.json';
import data from '../services/why_choose_us.json';
import howItWorks from '../services/how_it_works.json';
import BackgroundParticle from '../components/BackgroundParticle'

import faqs from '../services/faqs.json';
import { useLocation } from 'react-router-dom'

function HomePage() {

  const location = useLocation();

  useEffect(()=>{

    console.log(location.hash);

    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({behavior:'smooth'});
      }
    }



  }, [location]);


  return (
    <div className="w-screen h-screen bg-transparent">
      <Header/>
      <Banner />
      <BackgroundParticle></BackgroundParticle>

      <DividerWithBackground />
      <WhyChooseUs></WhyChooseUs>
      <DividerWithBackground />
      <OurServices></OurServices>
      <DividerWithBackground/>
      <OurWork></OurWork>
      <DividerWithBackground/>
      <AboutTheFounder></AboutTheFounder>
      <DividerWithBackground/>
      <Testimonials></Testimonials>
      <DividerWithBackground/>
      <HowItWorks></HowItWorks>
      <DividerWithBackground/>
      <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
      <DividerWithBackground/>
      <Footer></Footer>
    </div>
  )
}

function Banner() {

  const styles = {
    main: 'lg:pt-20 lg:h-screen lg:justify-center',
    heading: 'sm:text-7xl sm:leading-20',
    scrollIcon: 'lg:text-5xl my-10',
  }

  return (
    <main className={`${styles.main} container m-auto bg-transparent w-screen min-h-10/12 h-auto flex flex-col justify-start items-center px-4`}>
      <h2 className={`text-3xl  font-semibold text-black text-center ${styles.heading}`}>Empowering Innovation <br />
        <span className='text-white py-5' >with&nbsp;</span>
        Intelligent Tech
      </h2>
      <h4 className='w-full lg:w-2/4 text-2xl text-center mt-10 text-black font-medium'>
        Build faster, smarter, and bolder with our cutting-edge solutions designed for the future of <br /> digital transformation
      </h4>
      <VSpacer height={5} />
      <ButtonWithText title={'Start you project'} icon={'angles-right'}></ButtonWithText>
      <VSpacer height={2} />
      <h5 className='text-lg flex-wrap flex justify-center items-center text-black'>Looking for pre-build projects? &nbsp;
        <a href="#" className='text-violet-600 hover:text-violet-800 transition-colors'>Get it from here.</a>
      </h5>
      <VSpacer height={5} />
      <i className={`text-black text-center text-4xl m-0 p-0 rotate-180 fas fa-angles-up ${styles.scrollIcon}`}></i>
    </main>
  )
}

function WhyChooseUs() {

  const styles = {
    section: ''
  }

  return <section className='cursor-default min-h-screen h-auto py-10 flex justify-around items-center flex-col'>
    <HeadingWithBottomBorder heading={'why choose us?'}></HeadingWithBottomBorder>

    <section className="container mx-auto flex justify-center items-center flex-wrap">
      {
        data.map((item) => (
          <WhyCard key={item.id} item={item} isLast={item.id == data.length - 1} />
        ))
      }
    </section>

  </section>
}

function OurServices() {
  return <section className='mx-auto container min-h-screen w-full py-10 h-auto' id='our-services'>
    <div className="flex justify-center items-center flex-col">
      <HeadingWithBottomBorder heading={"our services"}></HeadingWithBottomBorder>
      <h4 className="my-5 font-medium text-black text-2xl text-center w-80 lg:w-auto">Delivering powerful, custom-built software solutions across platforms.</h4>
    </div>

    <div className="flex justify-center items-center flex-wrap py-10">
      {
        services.map((item) => (
          <ServiceCard service={item} key={item.id} />
        ))
      }
    </div>
    <VSpacer height={5} />
    <div className="flex justify-center text-center lg:w-full lg:m-0 ">
      <ButtonWithText title={'Request a custom service'} icon={''}></ButtonWithText>
    </div>
  </section>
}

function OurWork () {
  return (
    <section className='w-screen lg:container flex justify-between items-center flex-col mx-auto min-h-screen h-auto lg:min-h-screen lg:h-full py-10' id='our-work'>
       <div className='flex justify-center items-center flex-col'>
        <HeadingWithBottomBorder heading={'our work'}></HeadingWithBottomBorder>
        <h2 className="text-xl lg:text-2xl text-center font-normal my-10 text-black">A quick look at how we bring ideas to life.</h2>
      </div>
      {/* <VSpacer height={5} /> */}
      <OurWorkComponent></OurWorkComponent>
      <div></div>
    </section>
  )
}
function AboutTheFounder () {
  return (
    <section className='container flex justify-between items-center flex-col mx-auto lg:h-screen h-auto py-10' id='about-the-founder'>
      <div className='flex justify-center items-center flex-col'>
        <HeadingWithBottomBorder heading={'about the founder'}></HeadingWithBottomBorder>
      <h2 className="text-xl lg:text-2xl font-normal  lg:mx-0 text-center my-10 text-black">Hi, I'm <span className='font-semibold'>Madhan</span> - the developer behind the code.</h2>
      </div>

      <main className='w-full relative h-6/12 flex justify-center items-center flex-col lg:flex-row'>
        <div className="lg:absolute lg:top-0 lg:left-20 w-2/4 lg:w-60 h-auto bg-gray-300 overflow-hidden border-2 border-violet-600 rounded-tl-[25%] rounded-br-[25%]">
          <img src={founderProfile} alt="" className="w-full h-full object-scale-up" />
        </div>
        <div className="flex justify-center h-full w-full max-w-11/12 lg:max-w-9/12 max-h-10/12 text-black lg:bg-violet-600 lg:text-white my-2 lg:my-0 py-10 lg:py-0">
          <div className="w-full px-2 lg:px-0 lg:w-8/12 h-full flex-col flex justify-evenly items-end">
              <p className='font-medium text-lg my-2 lg:m-0'>I’m a passionate software developer and the founder of this startup, where I specialize in delivering custom-built software solutions for both final-year students and corporate professionals. </p>

            <p className='font-medium text-lg my-2 lg:m-0'>From mobile and web apps to backend servers and desktop applications, I personally handle each project — turning ideas into reliable, user-friendly software. </p>

            <p className='font-medium text-lg my-2 lg:m-0'> What started as a personal interest in programming has grown into a mission: to make high-quality, purpose-driven software accessible to students and individuals alike.</p>
          </div>
        </div>
      </main>

     <ul className='w-11/12 lg:w-fit h-auto'>
      <li className='w-full p-5 flex justify-start lg:justify-center border-2 border-gray-100 items-center my-2'>
        <i className="fas fa-lightbulb text-amber-300"></i>
        <h4 className='font-medium text-lg text-gray-700 p-3 lg:p-0'><span className='lg:mx-2 font-semibold'>Vision:</span> Empower individuals and students by bringing their software ideas to life — with passion, precision, and commitment.</h4>
      </li>
        <li className='w-full p-5 flex justify-start lg:justify-center border-2 border-gray-100 items-center my-2'>
        <i className="fas fa-cog text-violet-600"></i>
        <h4 className='font-medium text-lg text-gray-700 p-3 lg:p-0'><span className='lg:mx-2  font-semibold'>Tech Stack:</span>Java, Spring Boot, Node.js, ReactJS, MySQL, MongoDB, HTML, CSS, JavaScript, Swing, and more.</h4>
      </li>
     </ul>

    </section>
  )
}
function Testimonials () {
  return (
    <section className='container flex justify-between items-center flex-col mx-auto h-auto min-h-screen py-10'>
      <div className='flex justify-center items-center flex-col'>
        <HeadingWithBottomBorder heading={'client testimonials'}></HeadingWithBottomBorder>
      <h2 className="text-2xl font-semibold mt-10 text-black">What our happy clients say</h2>
      </div>

      <main className='w-full h-2/12 flex justify-center items-center flex-col'>
       {/* <div className="flex justify-center items-center"> */}
         <i className="text-7xl text-violet-600 fas fa-quote-left m-10 self-start"></i>
        <h1 className='text-black text-center text-2xl font-normal text-wrap w-10/12'>The software <span className='font-medium'>maive</span> built exceeded my expectations. Everything was explained clearly and delivered on time. </h1>
        <i className="text-7xl text-violet-600 fas fa-quote-right m-10 self-end"></i>
       {/* </div> */}


      </main>
        <div className="flex items-center justify-center text-black self-end">
          <span className='text-4xl font-bold hidden lg:block'>-</span>
          <h4 className="text-lg lg:text-xl mx-5 lg:mx-0 mb-4 lg:my-0 text-end font-semibold w-full"> Dhanush M. MBA, Student.</h4>
        </div>

      <h5 className='font-medium text-black text-lg text-wrap mx-4 lg:mx-0 mt-4 lg:mt-0 text-center'>
        Want to be our next happy client?&nbsp;<br className='block lg:hidden'/>
        <a href="#" className='text-violet-700 hover:text-violet-500 transition-colors'>Let's build something great together.</a>
      </h5>

    </section>
  )
}
function HowItWorks () {
  return (
    <section className='container flex justify-around items-center flex-col mx-auto min-h-screen h-auto py-10' id='how-it-works'>
        <HeadingWithBottomBorder heading={'how it works'}></HeadingWithBottomBorder>
        <VSpacer height={5} />
      <div className="w-auto h-auto flex justify-around items-center flex-wrap">
        {
          howItWorks.map((item)=> (
            <StepCardComponent key={item.id} item={item}></StepCardComponent>
          ))
        }
      </div>
      <VSpacer height={5} />
    </section>
  )
}

function FrequentlyAskedQuestions () {
  return (
    <section className='container flex justify-start items-start flex-col mx-auto h-auto min-h-screen py-10'>
      <div className='w-full flex justify-center items-center'>
        <HeadingWithBottomBorder heading={'frequently asked questions'}></HeadingWithBottomBorder>
      {/* <h2 className="text-2xl font-semibold mt-10 text-black">What our happy clients say</h2> */}
      </div>

      <ul className='mx-auto w-11/12 lg:w-full h-full'>
        {
          faqs.map((item, index)=> (
            <li key={index} className='w-full h-auto border-2 border-gray-100 py-5 px-4 mt-4'>
              <FaqItem item={item}></FaqItem>
            </li>
          ))
        }
      </ul>

    </section>
  )
}

export default HomePage