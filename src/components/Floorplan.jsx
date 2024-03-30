export default function Floorplan() {
    return (
        <div id='4' className="bg-[#1A3360] p-[50px]">
            <div className="">
                <h1 className="text-center text-white font-SOFIA font-semibold text-5xl">GYGY Mentis Floor Plan </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-[30px] justify-items-center">
                <div>
                    <img src="./images/Group32.png" alt="floor" />
                    <p className="text-white pt-[5px] text-center font-SOFIA font-semibold">OFFICE SPACE</p>
                </div>
                <div>
                    <img src="./images/Group32.png" alt="floor" />
                    <p className="text-white pt-[5px] text-center font-SOFIA font-semibold">RETAIL SPACE</p>
                </div>
                <div>
                    <img src="./images/Group32.png" alt="floor" />
                    <p className="text-white pt-[5px] text-center font-SOFIA font-semibold">RESTAURANTS</p>
                </div>

            </div>

        </div>
    )
}