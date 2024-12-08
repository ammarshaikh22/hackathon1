import Image from 'next/image'
import React from 'react'

const TrendingProducts = () => {
    return (
        <section className='my-20 relative'>
            <div className='max-w-[84%] mx-auto'>
                <h2 className='md:text-3xl text-2xl font-bold text-center'>Trending Products</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-10'>
                    {
                        Array.from({ length: 4 }).map((_, index) => (
                            <div className='col-span-1 shadow-2xl p-2 pb-6 flex items-center flex-col gap-2' key={index}>
                                <div className='bg-[#F6F7FB] w-full py-4 flex justify-center'>
                                    <Image src='/chair2.png' width={200} height={200} alt='image' />
                                </div>
                                <h3 className='text-xl text-[#FB2E86]'>Cantilever chair</h3>
                                <span className='text-sm'>$42.00</span>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-between gap-6 items-center mt-10 md:flex-row flex-col'>
                    <div className='px-4 py-2 md:w-[35%] w-full md:max-h-[270px] bg-[#FFF6FB] flex flex-col gap-2 '>
                        <h4 className='text-xl font-bold'>23% off in all products</h4>
                        <span className='underline text-[#FB2E86]'>Shop Now</span>
                        <div className='flex justify-end items-center'>
                            <Image src='/clock.png' width={200} height={200} alt='image' />
                        </div>
                    </div>
                    <div className='px-4 py-2 md:w-[35%] w-full md:min-h-[270px] bg-[#FFF6FB] flex flex-col gap-10 '>
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-xl font-bold'>23% off in all products</h4>
                            <span className='underline text-[#FB2E86]'>Shop Now</span>
                        </div>
                        <div className='flex justify-end items-center'>
                            <Image src='/draw.png' width={250} height={200} alt='image' />
                        </div>
                    </div>
                    <div className='md:w-[30%] w-full flex flex-col gap-6'>
                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <div className='flex gap-2 items-center' key={index}>
                                    <div className='bg-[#F5F6F8] px-2'>
                                        <Image src='/chair3.png' width={60} height={60} alt='image' />
                                    </div>
                                    <div className='flex flex-col gap-1 items-start'>
                                        <span className='text-sm'>Executive Seat chair</span>
                                        <span className='text-sm'>$32.00</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrendingProducts