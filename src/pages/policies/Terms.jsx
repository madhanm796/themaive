import React, { useEffect } from 'react'
import Header from '../../components/Header'

import terms from '../../services/terms_and_conditions.json';
import Footer from '../../components/Footer';
import PolicySection from '../../components/PolicySection';

function Terms() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section>
            <Header></Header>
            <main className='w-11/12 lg:w-2/4 mx-auto p-5 border-2 border-violet-600 mb-10'>
                <PolicySection data={terms}></PolicySection>
            </main>
            <Footer></Footer>
        </section>
    )
}

export default Terms