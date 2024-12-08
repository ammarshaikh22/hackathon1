'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className='relative z-10'>
            <div className='lg:block hidden py-2 bg-[#7E33E0]'>
                <div className='flex max-w-[84%] mx-auto justify-between items-center'>
                    <div className='flex justify-center gap-6 text-white items-center'>
                        <span>mhhasanul@gmail.com</span>
                        <span>(12345)67890</span>
                    </div>
                    <div className='text-white flex gap-4 items-center'>
                        <Select>
                            <SelectTrigger className="w-24">
                                <SelectValue placeholder="English" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Urdu</SelectItem>
                                <SelectItem value="dark">Hindi</SelectItem>
                                <SelectItem value="system">Chiness</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-24">
                                <SelectValue placeholder="USD" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">PKR</SelectItem>
                            </SelectContent>
                        </Select>
                        <p>Login</p>
                        <p>WishList</p>
                        <ShoppingCartIcon />
                    </div>
                </div>
            </div>
            <div className='max-w-[84%] mx-auto py-4 lg:block hidden'>
                <div className='flex justify-between items-center text-black'>
                    <div>
                        <span className='font-bold text-2xl'>Hekto</span>
                    </div>
                    <div>
                        <ul className='flex items-center gap-8'>
                            <Link href='/'><li className='text-base'>Home</li></Link>
                            <Link href='/about'><li className='text-base'>About</li></Link>
                            <Link href='/products'><li className='text-base'>Products</li></Link>
                            <Link href='/blog'><li className='text-base'>Blog</li></Link>
                            <Link href='/shop'><li className='text-base'>Shop</li></Link>
                            <Link href='/contact'><li className='text-base'>Contact</li></Link>
                        </ul>
                    </div>
                    <div className='flex justify-between items-center gap-6'>
                        <div className='relative'>
                            <input type="text" className='py-2 px-4 border border-gray-300 w-[250px]' />
                            <div className='bg-[#FB2E86] absolute right-0 top-0 flex justify-center items-center text-white  h-full w-[50px] '>
                                <SearchIcon className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile header */}
            <div className='lg:hidden block py-4 max-w-[88%] mx-auto'>
                <div className='flex justify-between items-center'>
                    <div>
                        <span className='font-bold text-2xl'>Hekto</span>
                    </div>
                    <div>
                        {
                            open ? <CloseIcon onClick={() => setOpen(!open)} className='fixed z-10 right-5 top-5' /> : <MenuIcon onClick={() => setOpen(!open)} />
                        }
                        <div className={`h-screen w-full fixed top-0 right-0 transition-all ease-in-out duration-500  ${open ? 'translate-x-0' : 'translate-x-full'} `}>
                            {
                                open ?
                                    <div className={`h-full w-full absolute top-0 bg-[#7E33E0] `}>
                                        <div className='flex justify-between items-center flex-col gap-10 my-20 text-white'>
                                            <div>
                                                <span className='font-bold text-2xl'>Hekto</span>
                                            </div>
                                            <div>
                                                <ul className='flex items-center gap-6 flex-col'>
                                                    <Link href='/' onClick={() => setOpen(!open)}><li className='text-base'>Home</li></Link>
                                                    <Link href='/about' onClick={() => setOpen(!open)}><li className='text-base'>About</li></Link>
                                                    <Link href='/products' onClick={() => setOpen(!open)}><li className='text-base'>Products</li></Link>
                                                    <Link href='/blog' onClick={() => setOpen(!open)}><li className='text-base'>Blog</li></Link>
                                                    <Link href='/shop' onClick={() => setOpen(!open)}><li className='text-base'>Shop</li></Link>
                                                    <Link href='/contact' onClick={() => setOpen(!open)}><li className='text-base'>Contact</li></Link>
                                                </ul>
                                            </div>
                                            <div className='flex justify-between items-center gap-6 flex-col'>
                                                <div className='relative'>
                                                    <input type="text" className='py-2 px-4 border border-gray-300 w-[250px]' />
                                                    <div className='bg-[#FB2E86] absolute right-0 top-0 flex justify-center items-center text-white  h-full w-[50px] '>
                                                        <SearchIcon className='' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header