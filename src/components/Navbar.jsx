import { navLinks } from "../store/constants";
import React, { useState, useEffect } from 'react';
import PopUp from './Popup';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);
    const HandleRemovePopUp = () => setOpenPopup(false);
    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="flex flex-col md:flex-row justify-around bg-[#1A3360] text-white py-1 ">
                <div className="basis-1/3">


                </div>
                <div className="basis-1/3 text-center">
                    <span className="text-lg">GYGY Mentis</span>
                </div>

                <div className="basis-1/3 text-center">
                    <span className="text-lg ">+91-940-3891-409</span>
                </div>
                {/* <div class="absolute marquee2 whitespace-nowrap">
                    <span class="text-lg mx-4">GYGY</span>
                    <span class="text-lg mx-4">MENTIS</span>
                    <span class="text-lg mx-4">CALL</span>
                    <span class="text-lg mx-4">NOW:</span>
                    <span class="text-lg mx-4 ">+91-940-3891-409</span>
                </div> */}
            </div>

            <nav className="w-full bg-[#FFFFFF]">
                <div className="flex items-center justify-around px-4">
                    <div onClick={() => setOpenPopup(true)} className="h-4/5 w-36 my-2 rounded-xl bg-[#1A3360]">
                        <img className="pl-2 pt-2" src="./images/GYGY-Logo-white.png" alt="Logo" />
                    </div>
                    <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#1A3360] font-Helvet p-2 focus:outline-none"
                        >
                            {isOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="hidden md:flex items-center justify-around gap-14">
                        {navLinks.map((link) => (
                            <React.Fragment key={link.id}>
                                {/* {link.name === 'Home' || link.name === 'Contact Us' ? ( */}
                                {link.name === 'Contact Us' ? (
                                    <a
                                        href="#"
                                        className="text-black font-Helvet px-3 font-light hover:underline"
                                        onClick={() => setOpenPopup(true)}
                                    >
                                        {link.name}
                                    </a>) : (
                                    <a
                                        href={`#${link.id}`}
                                        key={link.id}
                                        className="text-black font-Helvet px-3 font-light hover:underline"
                                    // onClick={() => setOpenPopup(true)}
                                    >
                                        {link.name}
                                    </a>
                                )}
                            </React.Fragment>

                        ))}
                        <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />

                    </div>
                </div>

                <div
                    className={`md:hidden ${isOpen ? "block" : "hidden"}`}
                >
                    {navLinks.map((link) => (
                        <React.Fragment key={link.id}>
                            {link.name === 'Contact Us' ? (
                                <a
                                    href="#"
                                    className="block text-black font-Helvet px-3 py-2 font-light w-full border-t border-gray-300 hover:underline"
                                    onClick={() => setOpenPopup(true)}
                                >
                                    {link.name}
                                </a>) : (

                                <a
                                    href={`#${link.id}`}
                                    key={link.id}
                                    // onClick={() => setOpenPopup(true)}
                                    className="block text-black font-Helvet px-3 py-2 font-light w-full border-t border-gray-300 hover:underline"
                                >
                                    {link.name}
                                </a>

                            )}
                        </React.Fragment>


                    ))}
                    <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />

                </div>
            </nav >
        </>
    );
};

export default Navbar;
