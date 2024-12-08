import Image from 'next/image'
import React from 'react'

const FeaturedProducts = () => {
    return (
        <section className='my-20 relative'>
            <div className='max-w-[84%] mx-auto'>
                <h2 className='md:text-3xl text-2xl font-bold text-center'>Featured Products</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-10'>
                    {
                        Array.from({ length: 4 }).map((_, index) => (
                            <div className='col-span-1 shadow-2xl h-[361px] flex items-center flex-col gap-4' key={index}>
                                <div className='bg-[#F6F7FB] w-full py-4 flex justify-center'>
                                    <Image src='/chair.png' width={200} height={200} alt='image' />
                                </div>
                                <h3 className='text-xl text-[#FB2E86]'>Cantilever chair</h3>
                                <span className='text-sm'>Code - Y523201</span>
                                <span className='text-sm'>$42.00</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts