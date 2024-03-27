export default function Amenities() {
  return (
    <div className="bg-[#F1F1F1] py-[8%] px-[8%]">
      <div>
        <h1 className="text-black  font-SOFIA font-bold text-center text-5xl"> GYGY Mentis Amenities</h1>
      </div>
      <div>
        <p className="text-black mt-[1%] text-center text-lg md:text-xl font-Helvetica px-[10%]">
          To give simplicity of working and a solid, loosening up climate to its
          occupiers, GYGY Mentis offers scope of offices in the complex. This
          includes things like a swimming pool, a mini-theater, and solar
          lighting.
        </p>
      </div>
      <div className="mx-[8%] mt-[4%] grid grid-cols-1 md:grid-cols-4 gap-9 place-items-center">
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-auto h-auto rounded-lg"
            src="./images/amenities/mini_theatre.png"
          />
          <p className="font-SOFIA font-semibold text-xl pt-[8px]">Mini Theatre</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            className="w-auto h-auto rounded-md"
            src="./images/amenities/swimming_pool.png"
          />
          <p className="font-SOFIA font-semibold text-xl pt-[8px]">Swimming Pool</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            className="w-auto h-auto rounded-md"
            src="./images/amenities/solar_lighting.png"
          />
          <p className="font-SOFIA font-semibold text-xl pt-[8px]">Solar Lighting</p>

        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            className="w-auto h-auto rounded-md"
            src="./images/amenities/grocery_shop.png"
          />
          <p className="font-SOFIA font-semibold text-xl pt-[8px]">Grocery Shop</p>

        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            className="w-auto h-auto rounded-md"
            src="./images/amenities/amphitheatre.png"
          />
          <p className="font-SOFIA font-semibold text-xl pt-[8px]">Amphitheatre</p>

        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            className="w-auto h-auto rounded-md"
            src="./images/amenities/multi_purpose_room.png"
          />
          <p className="font-SOFIA font-semibold text-xl pt-[8px]">
            Multipurpose Hall
          </p>

        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            className="w-auto h-auto rounded-md"
            src="./images/amenities/meditation.png"
          />
          <p className="font-SOFIA font-semibold text-xl pt-[8px]">
            Yoga/Meditation Area
          </p>

        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            className="w-auto h-auto rounded-md"
            src="./images/amenities/indoor_games.png"
          />
          <p className="font-SOFIA font-semibold text-xl pt-[8px]">Indoor Games</p>

        </div>










      </div>
    </div>
  )
}