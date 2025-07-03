function Integrations() {
  const brands = [
    { logo: "src/assets/brand/facebook.svg" },
    { logo: "src/assets/brand/gojek.svg" },
    { logo: "src/assets/brand/behance.svg" },
    { logo: "src/assets/brand/zendesk.svg" },
    { logo: "src/assets/brand/microsoft.svg" },
    { logo: "src/assets/brand/linkedin.svg" },
  ];

  return (
    <>
      <div className="w-full p-8 flex flex-col">
        <h1 className="text-sm font-bold text-[#5EABD6]">Integrations</h1>
        <h1 className="text-lg font-bold">CService Integrations</h1>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-4 justify-items-center">
          {brands.map((brand, index) =>(
            <img
            key={index}
            src={brand.logo}
            className="w-[100px]"/>
          ))}
        </div>
      </div>
    </>
  );
}
export default Integrations;
