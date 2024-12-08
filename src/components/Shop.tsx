import Image from 'next/image'
import React from 'react'

const Shop = () => {
    return (
        <section className='my-20'>
            <div className='max-w-[84%] mx-auto'>
                <div className='flex justify-between items-center gap-10 md:flex-row flex-col'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='md:text-lg font-bold'>Ecommerce Acceories & Fashion item </h3>
                        <span className='text-sm'>About 9,620 results (0.62 seconds)</span>
                    </div>
                    <div className='flex gap-4 items-center md:flex-row flex-col'>
                        <span className='text-sm'>per page:</span>
                        <input type="number" className='bg-transparent border border-gray-200 w-16 p-1' />
                        <span className='text-sm'>Sort by:</span>
                        <select name="sort" id="sort" className='text-sm'>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                        <span className='text-sm'>View:</span>
                        <input type="number" className='bg-transparent border border-gray-200 p-2' />
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-rows-3 gap-8 mt-12'>
                    {
                        Array.from({ length: 12 }).map((_, index) => (
                            <div className='col-span-1  flex items-center flex-col gap-2' key={index}>
                                <div className='bg-[#F6F7FB] w-full py-4 flex justify-center'>
                                    <Image src='/sofa4.png' width={200} height={200} alt='image' />
                                </div>
                                <h3 className='text-xl '>Vel elit euismod</h3>
                                <span className='text-sm text-[#FB2E86]'>$42.00</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Shop