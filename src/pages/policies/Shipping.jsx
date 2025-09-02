import React, { useEffect } from 'react'
import Header from '../../components/Header'

import shipping from '../../services/shipping_and_delivery.json';
import Footer from '../../components/Footer';
import PolicySection from '../../components/PolicySection';

function Shipping() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Header></Header>
      <main className='w-11/12 lg:w-2/4 mx-auto p-5 border-2 border-violet-600 mb-10'>
        <PolicySection data={shipping}></PolicySection>
      </main>
      <Footer></Footer>
    </section>
  )
}

export default Shipping