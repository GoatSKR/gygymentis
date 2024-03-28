export default function Photos() {
    return (
        <div className="bg-[#F1F1F1] py-[4%] px-[8%]">
            <div className="">
                <h1 className="text-center text-black font-SOFIA font-semibold text-5xl">GYGY Mentis Photos </h1>
            </div>
            <div>
                <p className="text-black mt-[1%] text-center text-lg md:text-2xl font-Helvet">
                    Sit-out courts | Sculpture court | Lawn | Fitness court | Yoga Court
                    | Amphitheatre | Kid’s Play Area | Pool deck Kids pool | Swimming Pool
                    | Grand club house | Skating Rink | Multi-Purpose court | Jogging Track
                </p>
            </div>
            <div className="mx-[8%] mt-[4%] grid grid-cols-1 md:grid-cols-3 gap-9">
                <img
                    className="w-auto h-auto"
                    src="./images/photos/img46.png"
                />
                <img
                    className="w-auto h-auto "
                    src="./images/photos/img50.png"
                />
                <img
                    className="w-auto h-auto "
                    src="./images/photos/img54.png"
                />
                <img
                    className="w-auto h-auto "
                    src="./images/photos/img58.png"
                />
                <img
                    className="w-auto h-auto "
                    src="./images/photos/img76.png"
                />
                <img
                    className="w-auto h-auto "
                    src="./images/photos/img82.png"
                />
            </div>
        </div>
    )
}