import Image from 'next/image'
import React from 'react'

const TopCategories = () => {
    return (
        <section className='my-10 relative'>
            <div className='max-w-[84%] mx-auto'>
                <h2 className='md:text-3xl text-2xl font-bold text-center'>Featured Products</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-8'>
                    {
                        Array.from({ length: 4 }).map((_, index) => (
                            <div className='col-span-1  flex items-center flex-col gap-2' key={index}>
                                <div className='bg-[#F6F7FB] md:w-full p-8 md:p-6 py-4 flex justify-center rounded-full'>
                                    <Image src='/chair4.png' width={200} height={200} alt='image' />
                                </div>
                                <span className='text-sm'>Mini LCW Chair</span>
                                <span className='text-sm'>$42.00</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TopCategories