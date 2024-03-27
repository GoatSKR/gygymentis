export default function About() {
    return (
        <div id='2' className="bg-[#1A3360] h-auto grid place-items-center py-10 md:py-20">
            <div className="flex flex-col md:flex-row items-center justify-between text-white">
                <div className="flex-1">
                    <img className="px-20" src=" ./images/img25.png" alt="hr Image" />
                </div>
                <div className="flex-1 px-5 md:px-20">
                    <p className="text-5xl font-SOFIA">About Project GYGY Mentis</p>
                    <p className="mt-[6%] md:mt-[3%] text-2xl font-SOFIA">
                        Premium Retail & Office Space in Sector 140, Noida
                    </p>
                    <p className="mt-10 text-lg font-SOFIA">
                        GYGY has a strong focus on building meaningful partnerships, fostering
                        relationships, and prioritizing the happiness and satisfaction of
                        those they work with. This philosophy suggests that GYGY values
                        more than just financial gains and emphasizes the importance of
                        collaboration, trust, and positive experiences. By prioritizing
                        partnerships and relationships, GYGY aims to create a sustainable
                        and mutually beneficial environment for growth and success. This
                        approach recognizes that true growth and fulfillment come from
                        establishing strong connections, delivering value, and making a
                        positive impact on the people they interact with.
                    </p>
                    
                    <div>

                        <button className="rounded-3xl mt-10 font-semibold font-Helvet text-[16px] font-serif lg:text-[18px]   bg-white text-[#1A3360] hover:text-white hover:bg-[#2a4f94] px-[22px] py-[8px] lg:px-[35px]">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}