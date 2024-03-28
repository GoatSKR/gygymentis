export default function PriceList() {
    return (
        <div className="bg-white py-[4%] px-[8%]">
            <div className="">
                <h1 className="text-center text-black font-SOFIA font-semibold text-5xl">GYGY Mentis Price List </h1>
            </div>
            <div className="mx-[10%] grid grid-cols-1 lg:grid-cols-3  justify-items-center gap-10 mt-6 ">
                <div className="flex flex-col justify-between border-4 border-[#1A3360] w-auto h-auto rounded-xl basis-1/3 ">
                    <h1 className="mt-4 px-[40px] text-black text-center font-extrabold text-2xl font-Helvet">
                        RETAIL SPACE
                    </h1>
                    <p className=" mt-[10px] px-[10px] text-black text-center text-xl font-Helvet">
                        SIZE : ON REQUEST
                    </p>
                    <p className=" mt-[10px] px-[10px] text-black text-center text-xl font-Helvet">
                        PRICE : ON REQUEST
                    </p>
                    <div className="mt-2 flex border-1 border-[#1A3360] bg-[#1A3360] h-auto w-auto py-2  px-10  cursor-pointer justify-center font-Helvet">
                        <p  className="text-white  text-center font-bold">
                            Request Price List
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-between border-4 border-[#1A3360] w-auto h-auto rounded-xl basis-1/3 ">
                    <h1 className="mt-4 px-[40px] text-black text-center font-extrabold text-2xl font-Helvet">
                        OFFICE SPACE
                    </h1>
                    <p className=" mt-[10px] px-[10px] text-black text-center text-xl font-Helvet">
                        SIZE : ON REQUEST
                    </p>
                    <p className=" mt-[10px] px-[10px] text-black text-center text-xl font-Helvet">
                        PRICE : ON REQUEST
                    </p>
                    <div className="mt-2 flex border-1 border-[#1A3360] bg-[#1A3360] h-auto w-auto py-2  px-10  cursor-pointer justify-center font-Helvet">
                        <p  className="text-white  text-center font-bold">
                            Request Price List
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-between border-4 border-[#1A3360] w-auto h-auto rounded-xl basis-1/3 ">
                    <h1 className="mt-4 px-[40px] text-black text-center font-extrabold text-2xl font-Helvet">
                        RESTAURANT
                    </h1>
                    <p className=" mt-[10px] px-[10px] text-black text-center text-xl font-Helvet">
                        SIZE : ON REQUEST
                    </p>
                    <p className=" mt-[10px] px-[10px] text-black text-center text-xl font-Helvet">
                        PRICE : ON REQUEST
                    </p>
                    <div className="mt-2 flex border-1 border-[#1A3360] bg-[#1A3360] h-auto w-auto py-2  px-10  cursor-pointer justify-center font-Helvet">
                        <p  className="text-white  text-center font-bold">
                            Request Price List
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}