import AboutCard from "../props/AboutCard.tsx";
function CardInAbout() {
  return (
    <>
      <div className="w-full p-8 flex flex-col">
        <h1 className="text-lg font-bold text-[#5EABD6]">Why Hire CService</h1>
        <div className="w-full mt-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-24">
          <AboutCard>
            <div className="flex flex-row justify-center items-center space-x-4">
              <div className="h-[80px] w-[80px] bg-black rounded-full"></div>
              <p>17.000+ Clients</p>
            </div>
          </AboutCard>
          <AboutCard>
            <div className="flex flex-row justify-center items-center space-x-4">
              <div className="h-[80px] w-[80px] bg-black rounded-full"></div>
              <p>17.000+ Clients</p>
            </div>
          </AboutCard>
          <AboutCard>
            <div className="flex flex-row justify-center items-center space-x-4">
              <div className="h-[80px] w-[80px] bg-black rounded-full"></div>
              <p>17.000+ Clients</p>
            </div>
          </AboutCard>
        </div>
      </div>
    </>
  );
}
export default CardInAbout;
