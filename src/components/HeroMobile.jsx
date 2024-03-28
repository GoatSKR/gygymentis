export default function HeroMobile(){
    return (
        <div className="bg-[#1A3360] lg:hidden">
                <div className=" basis-1/2 px-[20px] lg:px-[0px] lg:pr-[200px] lg:flex items-start">
                    <div className="bg-[#1A3360] flex flex-col justify-center items-center rounded-xl bg-opacity-75 w-full">
                        <img className="py-[20px]" src="./images/GYGY-Logo-white.png" alt="Logo" />

                        <form
                            className=" flex flex-col   items-center justify-center gap-8 mx-[5px] "
                        >
                            <input
                                type="text"
                                required
                                id="name"
                                placeholder="Name"
                                className="outline-none h-14 bg-white w-auto md:w-2/3 rounded-3xl px-4 border border-black text-black"

                            />
                            <input
                                type="text"
                                required
                                id="number"
                                placeholder="Phone Number"
                                className="outline-none h-14 bg-white md:w-2/3 rounded-3xl px-4 border border-black text-black"
                                pattern="[0-9]{10}"
                            />
                            <div className="my-7 px-7">
                                <p className="text-sm text-white text-center font-Helvet">Please fill in the following details. We will get back to you shortly.</p>
                            </div>
                            <button className="rounded-3xl mb-[60px] font-thin text-[16px] font-serif font-Helvet lg:text-[18px]  md:w-2/6 bg-white text-[#1A3360] hover:text-white hover:bg-[#1A3360] px-[22px] py-[8px] lg:px-[35px]">
                                Submit
                            </button>
                        </form>
                    </div>


                </div>

            </div>
    )
}