import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import Search from '../components/Search';


const Header = () => {
    return (
        <header className='bg-white py-7 border-b'>
            <div className="container ">
                {/* Header Top Area */}
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/">
                        <a href="/">
                            <Image
                                src="/logo.svg"
                                width="160"
                                height="55"
                                className='w-10 h-10 relative'
                                objectFit='contain'
                                alt='logo'
                            />
                        </a>
                    </Link>
                    {/* Search */}
                    <Search />
                    {/* Contact */}
                    <div className="lg:flex flex-col hidden ">
                        <span className="text-2xl font-bold">8 800 33454 654</span>
                        <p className="self-end text-color">Support 24/7</p>
                    </div>
                    {/* Icons */}
                    <div className=" flex items-center gap-5">
                        <Link href="/my-account" className="">
                            <a href="/my-account">
                                <AiOutlineUser className='text-3xl text-title' />
                            </a>
                        </Link>

                        <Link href="/cart" className="">
                            <a href="/cart" className='flex items-center gap-5'>
                                <div className="relative">
                                    <AiOutlineShoppingCart className='text-3xl text-title' />
                                    <span className="bg-primary rounded text-center absolute px-2 text-sm -right-3 -top-1">0</span>
                                </div>
                                <div className='hidden lg:flex'>
                                    <span className="text-color text-sm">Your Cart</span>
                                    <p className="text-title font-bold text-lg">$0.00</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header