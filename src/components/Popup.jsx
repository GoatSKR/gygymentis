import React, { useState, useEffect } from "react";
import { FaTimes } from 'react-icons/fa';

const PopUp = ({ openPopUp, closePopUp }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [submissionStatus, setSubmissionStatus] = useState(null);
    useEffect(() => {
        if (openPopUp) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [openPopUp]);

    useEffect(() => {
        let timer;
        if (submissionStatus === "success") {
            timer = setTimeout(() => {
                setSubmissionStatus(null);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [submissionStatus]);

    const handleLosePopUp = (e) => {
        if (e.target.id === "ModelContainer") {
            closePopUp();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://sheetdb.io/api/v1/h7apykwyjdlu4", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: [
                    {
                        Name: name,
                        Phone: number,
                    },
                ],
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSubmissionStatus("success");
                setName("");
                setNumber("");
            })
            .catch((error) => {
                console.error("Error Submitting Form!");
                setSubmissionStatus("error");
            });
    };

    return (
        <div
            id="ModelContainer"
            onClick={handleLosePopUp}
            className={`fixed inset-0 bg-black flex justify-center  items-center bg-opacity-20 backdrop-blur-sm transition-opacity ${openPopUp ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            style={{ zIndex: "1", transitionDuration: "0.4s" }}
        >
            <div
                className={`bg-[#1A3360] p-1 w-10/12 md:w-1/2 lg:1/3  border-4 rounded-br-3xl rounded-tl-3xl border-black pb-5 transition-transform ${openPopUp ? "transform translate-y-0" : "transform -translate-y-full"
                    }`}
                style={{ transitionDuration: "0.4s" }}
            >
                <div className="flex flex-row justify-end">
                    <button
                        className="text-white text-xl"
                        onClick={closePopUp}
                        aria-label="Close"
                    >
                        <FaTimes />
                    </button>
                </div>
                <div className="w-full px-4 pt-1 justify-center items-center">
                    <div className="flex justify-center">
                        <img className="h-3/4 shadow-black shadow-lg border border-gray-400 rounded-xl md:h-1/2 w-3/4 md:w-2/3" src="./images/img58.png" alt="Form" />
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className=" flex flex-col p-2  items-center justify-center gap-4 mx-[5px] mt-10"
                    >
                        <input
                            type="text"
                            required
                            id="name"
                            placeholder="Name"
                            className="outline-none h-10 lg:h-14 text-[13px] md:text-[18px] bg-white w-4/5 md:w-2/3 lg:w-2/4 rounded-3xl px-4 border border-black text-black"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <input
                            type="text"
                            required
                            id="number"
                            placeholder="Phone Number"
                            className="outline-none h-10 lg:h-14 text-[13px] md:text-[18px] bg-white w-4/5 md:w-2/3 lg:w-2/4 rounded-3xl px-4 border border-black text-black"
                            pattern="[0-9]{10}"

                            onChange={(e) => setNumber(e.target.value)}
                            value={number}
                        />
                        <div className="my-4 px-7">
                            <p className="text-[13px] text-white text-center font-Helvet">Please fill in the following details. We will get back to you shortly.</p>
                        </div>
                        {submissionStatus === "success" && (
                            <p className="text-[#bf9b30] font-Roadblock text-center">Form submitted successfully!</p>
                        )}
                        {submissionStatus === "error" && (
                            <p className="text-red-500 text-center">Error submitting form. Please try again later.</p>
                        )}
                        <button className="rounded-3xl mt-0 border border-gray-400 font-medium text-[13px] md:text-[18px] font-serif font-Helvet lg:text-[18px] w-auto  lg:w-1/4 bg-white text-[#1A3360] hover:text-white hover:bg-[#1A3360] px-[22px] py-[8px] lg:px-[35px]">
                            Submit
                        </button>
                    </form>
                    <div className="flex flex-col justify-center items-center h-auto pt-[20px]">
                        <div className="flex-1 w-36 my-2 border-2 shadow-black shadow-lg border-gray-400 rounded-xl bg-[#1A3360]">
                            <img className="pl-2 pt-2" src="./images/GYGY-Logo-white.png" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
