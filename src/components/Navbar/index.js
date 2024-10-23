'use client'

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import DarkMode from "./DarkMode"
import Typewriter from 'typewriter-effect';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);
    return (

        <header className="p-4 bg-gradient-to-r from-primary to-gray sticky top-0 z-10">
            <div className="flex items-center justify-between relative">
                <div className="text-2xl text-white font-semibold mx-10 ">
                    <Typewriter
                        options={{
                            strings: ['Group 5', '(～￣▽￣)～', '^o^', '(￣_￣|||)'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <button onClick={toggleSidebar} className="block md:hidden text-white">
                    <span className="w-10 h-[2px] my-2 block bg-white"></span>
                    <span className="w-10 h-[2px] my-2 block bg-white"></span>
                    <span className="w-10 h-[2px] my-2 block bg-white "></span>
                </button>

                <div ref={sidebarRef}
                    className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-primary from-60% to-gray text-white transition-transform duration-300 transform ${isOpen ? '-translate-x-0 shadow-blue shadow-xl z-10' : 'translate-x-full'}`}>

                    <div className="p-4">
                        <div className="flex justify-between">

                            <button onClick={toggleSidebar} className="block md:hidden text-white">
                                <span className="w-10 h-[2px] my-2 block bg-white rotate-45 translate-y-2 translate-x-1"></span>
                                <span className="w-10 h-[2px] my-2 block bg-white -rotate-45 -translate-y-1 translate-x-1"></span>
                            </button>
                            <DarkMode />
                        </div>
                        <div className="flex flex-col py-5 ">

                            <Link href={"/"} className="flex items-center gap-2 px-2 py-5 my-2 rounded-lg shadow-inner-gray active:bg-white active:text-primary active:shadow-inner-lg active:font-semibold active:textshadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>

                                Home
                            </Link>
                            <Link href={"/Translate"} className="flex items-center gap-2 px-2 py-5 my-2 rounded-lg shadow-inner-gray active:bg-white active:text-primary active:shadow-inner-lg active:font-semibold active:textshadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                                </svg>

                                Translate
                            </Link>
                            <Link href={"/Members"} className="flex items-center gap-2 px-2 py-5 my-2 rounded-lg shadow-inner-gray active:bg-white active:text-primary active:shadow-inner-lg active:font-semibold active:textshadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                                Members
                            </Link>
                        </div>


                    </div>
                    <div className="absolute inset-x-0 bottom-5 px-2 ">
                        <span className="w-full h-[2px] block bg-white mb-2 rounded-full"></span>
                        <p className="flex justify-center items-center">&copy; 2024 Article by Group 5</p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="flex items-center px-10 gap-10">
                        <Link href={"/"} className="flex justify-center items-center gap-1 text-white px-4 py-1 rounded-full hover:bg-white hover:text-primary hover:shadow-xl hover:shadow-blue transition ease-out duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                            Home
                        </Link>
                        <Link href={"/Translate"} className="flex justify-center items-center gap-1 text-white px-4 py-1 rounded-full hover:bg-white hover:text-primary hover:shadow-xl hover:shadow-blue transition ease-in-out duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                            </svg>

                            Translate
                        </Link>
                        <Link href={"/Members"} className="flex justify-center items-center gap-1 text-white px-4 py-1 rounded-full hover:bg-white hover:text-primary hover:shadow-xl hover:shadow-blue transition ease-in-out duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>

                            Members
                        </Link>
                        <DarkMode />
                    </div>

                </div>
            </div>

        </header>
    )
}

export default Navbar