export default function Card1(){
    return(
        <div className="w-full bg-white  py-20 flex flex-col md:flex-row items-center gap-4 justify-evenly px-4 text-white">
        <section className="bg-[#1A3360] py-20 flex items-center justify-center flex-col gap-5 w-72 ">
          <h3 className="text-base font-Helvet">Project Type</h3>
          <h2 className="font-bold text-xl font-Helvet">Commercial</h2>
        </section>
        <section className="bg-[#1A3360] py-20 flex items-center justify-center flex-col gap-5 w-72">
          <h3 className="text-base font-Helvet">Address</h3>
          <h2 className="font-bold text-xl font-Helvet">Sector 140, Noida Greater</h2>
        </section>
        <section className="bg-[#1A3360] py-20 flex items-center justify-center flex-col gap-5 w-72 ">
          <h3 className="text-base font-Helvet">Connectivity</h3>
          <h2 className="font-bold text-xl font-Helvet">Along the Metro corridor</h2>
        </section>
        <section className="bg-[#1A3360] py-20 flex items-center justify-center flex-col gap-5 w-72 ">
          <h3 className="text-base font-Helvet">Total Towers</h3>
          <h2 className="font-bold text-xl font-Helvet">3</h2>
        </section>
        <section className="bg-[#1A3360] py-20 flex items-center justify-center flex-col gap-5 w-72 ">
          <h3 className="text-base font-Helvet">Rera Id.</h3>
          <h2 className="font-bold text-xl font-Helvet">UPRERAPRJ251909</h2>
        </section>
      </div>
    )
}