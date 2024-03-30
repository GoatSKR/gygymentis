import { useState } from "react"
export default function ProjectDetails() {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
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
                alert("Form submitted successfully!");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error submitting form. Please try again later.");

            });
    }
    return (
        <div id='1'
            className="py-[30px] px-[5%]  bg-cover lg:bg-auto  bg-no-repeat h-auto w-full lg:w-auto"
            style={{
                backgroundImage: 'url("./images/Group35.png")'
            }}
        >
            <div className="flex flex-col lg:flex-row items-center justify-around">
                <div className="flex flex-col">
                    <div>
                        <h1 className="text-white font-SOFIA text-5xl font-bold">PROJECT DETAILS</h1>
                    </div>
                    <div>
                        <ul class="space-y-4 pt-[20px] text-left text-white text-xl lg:text-3xl">
                            <li class="flex items-center space-x-3 rtl:space-x-reverse">
                                <svg class="flex-shrink-0  w-5 h-5 lg:w-8 lg:h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                                <span>Project Size 4 Acre</span>
                            </li>
                            <li class="flex items-center space-x-3 rtl:space-x-reverse">
                                <svg class="flex-shrink-0  w-5 h-5 lg:w-8 lg:h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                                <span>Project Type Commerical</span>
                            </li>
                            <li class="flex items-center space-x-3 rtl:space-x-reverse">
                                <svg class="flex-shrink-0 w-5 h-5 lg:w-8 lg:h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                                <span>Total Towers 3</span>
                            </li>
                            <li class="flex items-center space-x-3 rtl:space-x-reverse">
                                <svg class="flex-shrink-0 w-5 h-5 lg:w-8 lg:h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                                <span>Property Type Office Space, Shop</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex pt-[30px] lg:pt-[0px] ">
                    <div className="bg-white flex flex-col justify-center items-center w-full">

                        <form
                            onSubmit={handleSubmit}
                            className=" flex flex-col   items-center justify-center gap-4 mx-[5px] "
                        >
                            <input
                                type="text"
                                required
                                id="name"
                                placeholder="Name"
                                className="outline-none h-14 bg-white w-auto md:w-2/3  px-4 border-b-2 border-black text-black"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <input
                                type="text"
                                required
                                id="number"
                                placeholder="Phone Number"
                                className="outline-none h-14 bg-white md:w-2/3  px-4 border-b-2 border-black text-black"
                                pattern="[0-9]{10}"
                                onChange={(e) => setNumber(e.target.value)}
                                value={number}
                            />
                            <div className="my-7 px-7">
                                <p className="text-sm text-black text-center font-Helvet">Please fill in the following details. We will get back to you shortly.</p>
                            </div>
                            <button className=" mb-[20px] font-thin text-[16px] font-serif font-Helvet lg:text-[18px]  md:w-2/6 bg-[#1A3360] text-white hover:text-[#1A3360] hover:bg-white px-[22px] py-[8px] lg:px-[35px]">
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}