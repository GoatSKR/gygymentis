import React, { useState } from 'react';
import PopUp from './Popup';
export default function Location() {
    const [openPopup, setOpenPopup] = useState(false);
    const HandleRemovePopUp = () => setOpenPopup(false);
    return (
        <div id='3' className=" grid place-items-center h-auto w-full text-black px-5 md:px-20 py-20">
            <div className="">
                <h1 className="text-center text-black font-SOFIA font-semibold text-3xl md:text-5xl">Location Advantages </h1>
            </div>
            <div className="">
                <p className="text-center text-black py-[5px] font-Helvet text-md lg:text-lg">
                    Sector 140 in Noida is a rapidly evolving urban locality situated
                    in the National Capital Region (NCR) of India. Noida, which stands
                    for New Okhla Industrial Development Authority, is renowned for its
                    meticulously planned infrastructure and burgeoning commercial zones.
                    Sector 140 is one of the many sectors within Noida, and it offers a
                    unique blend of residential and commercial spaces, making it an
                    increasingly attractive destination for both individuals and businesses.
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center pt-[30px]">
                <div className="flex-1">
                    <div className="">
                        <h1 className="text-left text-black font-SOFIA font-semibold text-xl md:text-2xl">About Sector 140, Noida </h1>
                    </div>

                    <div>
                        <ul className="list-disc pl-5 pt-[20px] text-MD md:text-xl font-Helvet">
                            <li>
                                Felix Hospital 2.2 KM.
                            </li>
                            <li>
                                Noida Sector 137 Metro Station 2.2 KM.
                            </li>
                            <li>
                                SKS World School, Sector 137 2.3 KM.
                            </li>
                            <li>
                                Purvanchal Royal Park 2.4 KM.
                            </li>
                            <li>
                                Panchsheet Balak Inter College 4KM.
                            </li>
                            <li>
                                Noida-Greater Noida Expressway 2.3KM.
                            </li>
                            <li>
                                Hazarat Nizamuddin Railway Station 21.9KM.
                            </li>
                            <li>
                                Indira Gandhi International Airport 37.1KM.
                            </li>
                        </ul>
                    </div>
                    <div>

                        <button onClick={() => setOpenPopup(true)} className="rounded-3xl mt-[4%] font-semibold text-[16px] font-serif lg:text-[18px] bg-[#1A3360] text-white hover:text-[#1A3360] hover:bg-white px-[22px] py-[8px] lg:px-[35px]">
                            Check out on Map
                        </button>
                        <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
                    </div>
                </div>

                <div className="flex-1 pt-10 md:pt-0">
                    <img className="" src=" ./images/img58.png" alt="location Image" />
                </div>
            </div>
        </div>
    )
}