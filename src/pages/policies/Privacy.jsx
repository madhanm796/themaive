import React, { useEffect } from 'react'
import Header from '../../components/Header'

import privacy from '../../services/privacy_policy.json';
import Footer from '../../components/Footer';
import PolicySection from '../../components/PolicySection';

function Privacy() {

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);

    return (
        <section>
            <Header></Header>
            <main className='w-11/12 lg:w-2/4 mx-auto p-5 border-2 border-violet-600 mb-10'>
                <PolicySection data={privacy}></PolicySection>
            </main>
            <Footer></Footer>
        </section>
    )
}

export default Privacy