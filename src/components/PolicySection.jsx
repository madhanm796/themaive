import React from 'react'

function PolicySection({ data }) {
    return (
        <>
            <h1 className="font-semibold text-4xl text-black capitalize mb-5">{data.title}</h1>
            {data.subheading && <h2 className='text-lg my-4 text-black '>{data.subheading}</h2>}
            {data.description && <h4 className='text-lg text-red-600 font-normal'>* {data.description}</h4>}

            <ul className='mt-4'>
                {
                    data.list.map((item, index) => (
                        <li className='text-black' key={index}>
                            <h2 className="text-2xl font-semibold capitalize">{index + 1}. {item.title}</h2>
                            {item.items &&
                                <ul className='mx-4 my-2'>
                                    {
                                        item.items.map((item, index) => (
                                            <li className='text-lg' key={index}><span className='font-medium'>-</span>&nbsp;{item.content}</li>
                                        ))
                                    }
                                </ul>
                            }

                            {item.conclusion && <p className='font-normal text-lg my-2 mx-5'>{item.conclusion}</p>}

                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default PolicySection