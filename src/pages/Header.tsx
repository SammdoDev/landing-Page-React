import Button from "../props/Button";

function Header() {
  return (
    <>
      <div className="flex flex-col-reverse items-center justify-center md:flex-row w-full py-8">
        <div className="flex flex-col space-y-2 font-bold p-8">
          <h1 className="text-2xl md:text-4xl">
            Virtual Receptionist Service & Business Answering
          </h1>
          <p className="text-lg font-thin color-[#2F5249]">
            Our virtual receptionists provide a warm, professional welcome to
            your customers — anytime, anywhere.
          </p>
          <div className="flex flex-row space-x-4 mt-4">
            <Button className="text-white">Get Started</Button>
            <Button className="bg-white shadow-black shadow-sm text-black">Download</Button>
          </div>
        </div>

        <img src="src\assets\header.jpg" width={600} height={600} />
      </div>
    </>
  );
}

export default Header;
