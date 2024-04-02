import { useState } from "react"
import GoogleAnalytics from "../features/GoogleAnalytics";
import PopUp from './Popup';
export default function Hero() {
    const [openPopup, setOpenPopup] = useState(false);
    const HandleRemovePopUp = () => setOpenPopup(false);
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("");
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
                        Email: email,
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
            className="py-[90px] px-[5%] bg-[#1A3360] bg-auto lg:bg-cover bg-center bg-no-repeat h-lvh w-full lg:w-auto"
            style={{
                backgroundImage: 'url("./images/Group29.png")'
            }}
        >
            <div className="flex flex-col-reverse lg:flex-row gap-10">
                <div className="hidden basis-1/2 px-[20px] lg:px-[0px] lg:pr-[200px] lg:flex items-start">
                    <div className="bg-[#1A3360] flex flex-col justify-center items-center rounded-xl bg-opacity-75 w-full">
                        <img className="py-[20px]" src="./images/GYGY-Logo-white.png" alt="Logo" />

                        <form
                            onSubmit={handleSubmit}
                            className=" flex flex-col   items-center justify-center gap-8 mx-[5px] "
                        >
                            <input
                                type="text"
                                required
                                id="name"
                                placeholder="Name"
                                className="outline-none h-14 bg-white w-auto md:w-2/3 rounded-3xl px-4 border border-black text-black"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <input
                                type="text"
                                required
                                id="number"
                                placeholder="Phone Number"
                                className="outline-none h-14 bg-white md:w-2/3 rounded-3xl px-4 border border-black text-black"
                                pattern="[0-9]{10}"
                                title="Please enter a valid Phone Number"
                                onChange={(e) => setNumber(e.target.value)}
                                value={number}
                            />
                            <input
                                type="text"
                                required
                                id="email"
                                placeholder="Email"
                                className="outline-none h-14 bg-white md:w-2/3 rounded-3xl px-4 border border-black text-black"
                                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                                title="Please enter a valid email address"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <div className="my-7 px-7">
                                <p className="text-sm text-white text-center font-Helvet">Please fill in the following details. We will get back to you shortly.</p>
                            </div>
                            <button className="rounded-3xl mb-[60px] font-thin text-[16px] font-serif font-Helvet lg:text-[18px]  md:w-2/6 bg-white text-[#1A3360] hover:text-white hover:bg-[#1A3360] px-[22px] py-[8px] lg:px-[35px]">
                                Submit
                            </button>
                        </form>
                        <GoogleAnalytics />
                    </div>


                </div>
                <div className="basis-1/2">
                    <div className="text-white text-md md:text-2xl font-SOFIA pt-[20px] lg:pt-[0px] ">
                        <h2>SECTOR 140, NOIDA EXPRESSWAY</h2>
                    </div>
                    <div className="text-4xl lg:text-7xl text-white font-SOFIA font-extrabold pt-4 lg:pt-6">
                        <h1>GY GY MENTIS</h1>
                    </div>
                    <div className="text-white text-md md:text-2xl font-SOFIA pt-6">
                        <h2>Payment Plan: 50:25:25</h2>
                    </div>
                    <div className="text-white text-md md:text-2xl font-SOFIA pt-2">
                        <h2>12% Assured Return</h2>
                    </div>
                    <div className="text-white text-md md:text-2xl font-SOFIA pt-2">
                        <h2>New Launch and Possession : 3 years</h2>
                    </div>
                    <div className="text-4xl lg:text-5xl pt-6 text-white font-SOFIA font-extrabold">
                        <h1>Starting Price ₹ 14.50 Lakhs*</h1>
                    </div>
                    <div className="text-white text-md md:text-2xl font-SOFIA pt-6">
                        <h2>Office Space / Retail Shop</h2>
                    </div>
                    <div>

                        <button
                            onClick={() => setOpenPopup(true)}
                            className="rounded-3xl mt-[4%] font-semibold text-sm md:text-[xl] font-Helvet lg:text-[18px] bg-[#1A3360] hover:text-[#1A3360] hover:bg-white px-[22px] py-[8px] md:py-[10px] lg:px-[35px] text-white">
                            More Information
                        </button>
                        <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
                    </div>
                </div>
            </div>
        </div>
    )
}