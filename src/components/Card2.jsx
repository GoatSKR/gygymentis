export default function Card2() {
    return (
        <div className="py-[50px]">
            <h1 className="text-center text-[#1A3360] font-bold text-5xl">
                Why Buy Directly From The Builder
            </h1>
            <div className="w-full bg-white  py-20 flex flex-col md:flex-row items-center gap-12 justify-center px-4 text-white">
                <section className="bg-[#1A3360] px-[15px] py-20 flex items-center justify-center flex-col gap-5 w-72">
                    <h3 className="font-bold text-xl font-Helvet">0% Brokerage</h3>
                    <h2 className="text-md text-center font-Helvet">We charge zero % brokerage,so you get the most competitive price</h2>
                </section>
                <section className="bg-[#1A3360] px-[15px] py-20 flex items-center justify-center flex-col gap-5 w-72">
                    <h3 className="font-bold text-xl font-Helvet">Cheapest Rate Guarantee</h3>
                    <h2 className="text-md text-center font-Helvet">We are confident that you will not find a price which is better than us.</h2>
                </section>
                <section className="bg-[#1A3360] px-[15px] py-20 flex items-center justify-center flex-col gap-5 w-72">
                    <h3 className="font-bold text-xl font-Helvet">10 gm GOLD COIN FREE</h3>
                    <h2 className="text-md text-center font-Helvet">If you find a price lower than us we will match it and give an exclusive 10 gram gold coin free</h2>
                </section>
            </div>
        </div>
    )
}