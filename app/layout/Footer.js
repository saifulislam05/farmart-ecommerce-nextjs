import React from 'react'
import FooterCard from '../components/FooterCard'
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import Button from '../components/shared/Button';

const Footer = () => {
    return (
        <footer className='bg-white border-t'>
            <div className="container">
                {/* Footer infos */}
                <div className="flex justify-between space-y-4 items-center flex-wrap pb-10 pt-8 border">
                    <FooterCard
                        image="/icons/f (1).svg"
                        title="Free Shopping"
                        subtitle="For all orders over $200"
                    />
                    <FooterCard
                        image="/icons/f (2).svg"
                        title="1 & 1 Reaturns"
                        subtitle="Cancelation after 1 day"
                    />
                    <FooterCard
                        image="/icons/f (3).svg"
                        title="100% Secure Payment"
                        subtitle="Gurantee secure apyments"
                    />
                    <FooterCard
                        image="/icons/f (4).svg"
                        title="24/7 Dedicated Support"
                        subtitle="Anywhere & anytime"
                    />
                    <FooterCard
                        image="/icons/f (5).svg"
                        title="Daily Offers"
                        subtitle="Discount up to 70% OFF"
                    />


                </div>
                {/* footer widges */}

                <div className="my-10 flex flex-wrap gap-10 justify-between">
                    {/* Contacts  */}
                    <div className="max-w-sm">
                        <h2 className="text-lg mb-5 font-bold">Farmart - Your Online Foods & Grocery</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusantium porro quo reiciendis placeat fugit, autem voluptatibus at delectus, </p>
                        <div className="mt-5 space-y-2">
                            <span className='flex'>
                                <FiPhoneCall className='text-color mt-[5px]' />
                                <div className='ml-4'>
                                    <p  >Hotline 24/7 :</p>
                                    <h3 className='text-xl font-bold'>(+880) 1787- 463481</h3>
                                </div>
                            </span>

                            <span className='flex !mt-5'>
                                <AiOutlineHome className='text-color mt-[5px]' />
                                <p className='ml-4 text-color' >Bijulia, West Bengal 733208 India</p>
                            </span>
                            <span className='flex '>

                                <AiOutlineMail className='text-color mt-[5px]' />
                                <address className='ml-4 not-italic' >Support@gamil.com</address>
                            </span>
                        </div>
                    </div>
                    {/* Links  */}
                    <div className="">
                        <h2 className=" text-lg mb-6 font-bold">Useful Links</h2>
                        <ul className='space-y-5'>
                            <FooterLink
                                href='/'
                                text="About Us"
                            />
                            <FooterLink
                                href='/'
                                text="Contact"
                            />
                            <FooterLink
                                href='/'
                                text="Help Center"
                            />
                            <FooterLink
                                href='/'
                                text="Career"
                            />
                            <FooterLink
                                href='/'
                                text="Sitemap"
                            />

                        </ul>
                    </div>
                    {/* Links  */}
                    <div className="">
                        <h2 className=" text-lg mb-6 font-bold">Help Center</h2>
                        <ul className='space-y-5'>
                            <FooterLink
                                href='/'
                                text="Payments"
                            />
                            <FooterLink
                                href='/'
                                text="Shipping"
                            />
                            <FooterLink
                                href='/'
                                text="Product Returns"
                            />
                            <FooterLink
                                href='/'
                                text="FAQ"
                            />
                            <FooterLink
                                href='/'
                                text="Checkout"
                            />

                        </ul>
                    </div>
                    {/* Newsletter  */}
                    <div className="lg:max-w-sm">
                        <h2 className="text-lg mb-6 font-bold">Farmart Newsletter</h2>
                        <p>Register now to get updates on promotions and coupns. Don't worry! We not spam</p>
                        <div className="flex items-center mt-5">
                            <div className="flex flex-1 items-center border p-4 rounded">
                                <AiOutlineMail className="text-title mt-[5px]" />
                                <input
                                    type="text"
                                    placeholder="Your email..."
                                    className="outline-none bg-transparent px-4 flex-1"
                                />
                            </div>
                            <Button
                                title="Subscribe"
                                className="self-stretch"
                            />
                        </div>
                    </div>
                </div>

                {/* Copyright  */}

                <div className="my-10 flex flex-wrap space-y-3 justify-center md:justify-between items-center border-t ">
                    <p className='text-sm'>ⓒ {new Date().getFullYear()} <a href='https://saifulsoftwares.com' className='underline' target="_blank" rel="noreferrer">Saiful Islam</a>.No Rights Reserved.Build Just for fun 😜😜😜. </p>
                    <img src="/images/footer-new-payment.png" alt="jlkasjdf" />
                </div>


            </div>
        </footer>
    )
}

const FooterLink = ({ href = "#", text }) => (
    <li>
        <Link href={href}>
            <a href={href}>{text}</a>
        </Link>
    </li>
)
export default Footer