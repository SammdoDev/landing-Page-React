import { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

type Review = {
  text: string;
  name: string;
  role: string;
  image: string;
};

function Riview() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 16;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 16;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const reviews: Review[] = [
    {
      text: "From start to finish, everything was handled efficiently. The staff was friendly and attentive, making the whole experience enjoyable.",
      name: "Sammdo",
      role: "FrontEnd Engineer",
      image: "src/assets/profileRiview/pfp1.jpg",
    },
    {
      text: "This exceeded my expectations. The process was smooth, and the final result was better than I imagined.",
      name: "Jordan Well",
      role: "UI Designer",
      image: "src/assets/profileRiview/pfp2.jpg",
    },
    {
      text: "I had a wonderful experience with this service. The team was incredibly responsive and made sure every detail was taken care of.",
      name: "Michael Chen",
      role: "Product Manager",
      image: "src/assets/profileRiview/pfp3.jpg",
    },
    {
      text: "Since using the virtual receptionist service, we’ve never missed a client call. It feels like we have a professional front desk team — without the cost. Our customers love the fast response, and I love the peace of mind.",
      name: "Barack Opus",
      role: "Receptionist",
      image: "src/assets/profileRiview/pfp4.jpg",
    },
  ];

  return (
    <div className="w-full p-8 flex flex-col">
      <h1 className="text-sm font-bold text-[#5EABD6]">Review</h1>

      <div className="flex flex-row justify-between items-center mt-2">
        <h1 className="text-lg font-bold">What are they saying?</h1>
        <div className="flex flex-row space-x-4">
          <ArrowLeft
            onClick={scrollLeft}
            className="bg-blue-100 rounded-full cursor-pointer p-1"
            size="28"
            color="black"
          />
          <ArrowRight
            onClick={scrollRight}
            className="bg-blue-300 rounded-full cursor-pointer p-1"
            size="28"
            color="black"
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="w-full mt-8 flex flex-row overflow-x-auto space-x-4 pb-4 scroll-smooth"
      >
        {reviews.map((item, index) => (
          <div
            key={index}
            ref={index === 0 ? cardRef : null}
            className="min-w-[350px] h-[220px] flex flex-col justify-between py-4 px-4 bg-white shadow-2xl rounded"
          >
            <p className="mb-4">{item.text}</p>
            <div className="flex flex-row space-x-4 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="h-[40px] rounded-full"
              />
              <div className="flex flex-col items-start">
                <h1 className="font-bold text-lg">{item.name}</h1>
                <p className="font-light">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Riview;
