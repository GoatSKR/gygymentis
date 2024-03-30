import React, { useState } from 'react';
import PopUp from './Popup';
export default function ProjectHighlights() {
    const [openPopup, setOpenPopup] = useState(false);
    const HandleRemovePopUp = () => setOpenPopup(false);
    return (
        <div>
            <div className="bg-white grid place-items-center h-auto w-full text-black px-2 md:px-10 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <div className="basis-1/2 px-4 md:px-[58px] space-y-6">
                        <p className="text-3xl md:text-4xl uppercase py-4 font-SOFIA">PROJECT HIGHLIGHTs</p>

                        <p className="text-2xl font-semibold font-Helvet">
                            Why you should consider GYGY Mentis?
                        </p>
                        <p className="text-md font-Helvet">
                            1) Each floor features 13 elevators. <br />
                            2) There are distinct driveways for retail outlets and offices, each with their own car and cab drop-off points. <br />
                            3) The food court offers a broad selection of options, complemented by a premium cafeteria open around the clock. <br />
                            4) There are dedicated outlets for electric vehicle (EV) charging. <br />
                            5) The building employs the latest 3-tier air purification technology, meeting international standards. <br />
                            6) It is equipped with fibre-to-the-floor (FTTF) technology and supports a web/app-based management system. <br />
                            7) An observatory deck provides sweeping views of the city skyline.
                        </p>
                        <div>

                            <button onClick={() => setOpenPopup(true)} className="rounded-3xl mt-[1%] md:mt-[4%] font-semibold text-[16px] font-serif lg:text-[18px] bg-[#1A3360] text-white hover:text-[#1A3360] hover:bg-white px-[22px] py-[8px] lg:px-[35px]">
                                Read More
                            </button>
                            <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />

                        </div>
                    </div>

                    <div className=" basis-1/2 px-0 md:px-20"  >
                        <video id="myVideo" controls className="rounded-3xl mt-6" width="100%" height="auto">
                            <source src="./video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

        </div>
    )
}