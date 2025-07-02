import { UilArrowRight, UilArrowLeft } from "@iconscout/react-unicons";
function Riview() {
  return (
    <>
      <div className="w-full p-8 flex flex-col overflow-x-auto">
        <h1 className="text-sm font-bold text-[#5EABD6]">Riview</h1>
        <div className="flex flex-row justify-between">
          <h1 className="text-lg font-bold">What are they saying?</h1>
          <span className="flex flex-row space-x-4">
            <UilArrowLeft
              className="bg-blue-100 rounded-full"
              size="32"
              color="black"
            />
            <UilArrowRight
              className="bg-blue-300 rounded-full"
              size="32"
              color="black"
            />
          </span>
        </div>
        <div className="w-full mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-2">
          <div className="w-full flex flex-col py-4 px-2 bg-white shadow-2xl items-start text-start">
            <p className="max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              tempora quos totam voluptatibus laudantium nesciunt delectus,
              repudiandae, eius commodi impedit suscipit illo? Vitae, tempora et
              nisi soluta iusto saepe consequatur!
            </p>

            <div className="flex flex-row space-x-4 mt-4 items-center">
              <img src="src/assets/google.webp" className="h-[40px]" />

              <div className="flex flex-col items-start">
                <h1 className="font-bold text-lg">Sammdo</h1>
                <p className="font-light">FrontEnd Engineer</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col py-4 px-2 bg-white shadow-2xl items-start text-start">
            <p className="max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              tempora quos totam voluptatibus laudantium nesciunt delectus,
              repudiandae, eius commodi impedit suscipit illo? Vitae, tempora et
              nisi soluta iusto saepe consequatur!
            </p>

            <div className="flex flex-row space-x-4 mt-4 items-center">
              <img src="src/assets/google.webp" className="h-[40px]" />

              <div className="flex flex-col items-start">
                <h1 className="font-bold text-lg">Sammdo</h1>
                <p className="font-light">FrontEnd Engineer</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col py-4 px-2 bg-white shadow-2xl items-start text-start">
            <p className="max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              tempora quos totam voluptatibus laudantium nesciunt delectus,
              repudiandae, eius commodi impedit suscipit illo? Vitae, tempora et
              nisi soluta iusto saepe consequatur!
            </p>

            <div className="flex flex-row space-x-4 mt-4 items-center">
              <img src="src/assets/google.webp" className="h-[40px]" />

              <div className="flex flex-col items-start">
                <h1 className="font-bold text-lg">Sammdo</h1>
                <p className="font-light">FrontEnd Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Riview;
