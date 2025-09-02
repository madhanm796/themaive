import React, { useEffect } from 'react'
import Header from '../../components/Header'
import refund from '../../services/refund.json';
import Footer from '../../components/Footer';
import PolicySection from '../../components/PolicySection';

function Refund() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Header></Header>
      <main className='w-11/12 lg:w-2/4 mx-auto p-5 border-2 border-violet-600 mb-10'>

        <PolicySection data={refund}></PolicySection>

        <h4 className="text-sm my-5 font-semibold text-black">
          Refunds, if approved, will be processed within 7 working days.
        </h4>

        <h5 className="text-black text-lg font-medium">
          We reserve the right to deny refund requests for reasons including:
        </h5>
        <ul className='list-disc mx-10 my-5'>
          <li className='text-black font-norma'>Change of mind</li>
          <li className='text-black font-normal'>Mistaken purchases</li>
        </ul>

      </main>
      <Footer></Footer>
    </section>
  )
}

export default Refund