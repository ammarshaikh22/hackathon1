import Image from 'next/image'
import React from 'react'

const LeatestProducts = () => {
    return (
        <section className='my-20 relative'>
            <div className='max-w-[84%] mx-auto'>
                <h2 className='md:text-3xl text-2xl font-bold text-center'>Leatest Products</h2>
                <div className='flex justify-center items-center gap-2 md:gap-16 md:mt-10 mt-6 text-sm md:flex-row flex-col'>
                    <span>New Arrival</span>
                    <span>Best Seller</span>
                    <span>Featured</span>
                    <span>Special Offer</span>
                </div>
                <div className='grid lg:grid-cols-3 grid-rows-2 md:grid-cols-2 grid-cols-1 gap-10 md:mt-16 mt-8'>
                    {
                        Array.from({ length: 6 }).map((_, index) => (
                            <div className='col-span-1 flex items-center flex-col gap-4' key={index}>
                                <div className='bg-[#F6F7FB] w-full py-4 flex justify-center'>
                                    <Image src='/sofa.png' width={200} height={200} alt='image' />
                                </div>
                                <div className='flex justify-between gap-12 items-center'>
                                    <h3 className='text-sm text-[#151875]'>Comfort Handy Craft</h3>
                                    <span className='text-xs text-[#FB2E86]'>$42.00</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default LeatestProducts