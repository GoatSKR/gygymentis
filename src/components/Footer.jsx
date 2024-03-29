import { useState } from "react"
export default function Footer() {
    const containerStyle = {
        background: 'url("./images/Group36.png")', 
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        width: "100%",
        height: "100vh", 
    }

    const overlayStyle = {
       
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white", 
    }
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
        <div style={containerStyle}>
            <img
                src="./images/Group36.png"
                alt="Foreground Image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
                style={overlayStyle}
                className="flex flex-col items-center justify-center gap-6 "
            >
                <h1 className="text-4xl font-Helvet pb-8">Get In Touch</h1>
                <form
                    onSubmit={handleSubmit}
                    className=" flex flex-col lg:flex-row items-center justify-center gap-4 mx-[5px]"
                >
                    <input
                        type="text"
                        required
                        id="name"
                        placeholder="Name"
                        className="outline-none h-10 bg-white w-auto rounded-3xl px-4 border border-black text-black"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        type="text"
                        required
                        id="number"
                        placeholder="Phone Number"
                        className="outline-none h-10 bg-white w-auto rounded-3xl px-4 border border-black text-black"
                        pattern="[0-9]{10}"
                        onChange={(e) => setNumber(e.target.value)}
                        value={number}
                    />
                    <button className="rounded-3xl mt-0 font-semibold text-[16px] font-serif lg:text-[18px]   bg-white text-[#1A3360] hover:text-white hover:bg-[#1A3360] px-[22px] py-[8px] lg:px-[35px]">
                        Submit
                    </button>
                </form>
                <h1 className="text-center text-3xl md:text-6xl font-SOFIA">GYGY MENTIS</h1>
                <h2 className="text-center text-md md:text-4xl font-Helvet">
                    +91-8826-870-417 | info@gygymentis.site
                </h2>
                <div className="h-28 w-48 rounded-xl bg-[#1A3360]">
                    <img className="pl-2 pt-2 w-full h-full" src="./images/GYGY-Logo-white.png" />
                </div>
                <p className=" text-md md:text-2xl text-center font-Helvet">
                    This site is for information purpose only and should not be treated as
                    the official information.
                </p>
                <p className="text-md md:text-2xl text-center font-Helvet">RERA No. UPRERAPRJ251909 | www.up-rera.in.</p>
                <p className="text-md md:text-2xl text-center font-Helvet">Sitemap | Privacy Policy</p>
            </div>
        </div>
    )
}