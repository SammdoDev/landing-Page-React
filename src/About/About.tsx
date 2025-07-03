import DescCard from "../props/DescCard";
import CardInAbout from "./Programs";
import { UilArrowRight } from "@iconscout/react-unicons";

function About() {
  return (
    <>
      <CardInAbout />

      <div className="w-full flex justify-center">
        <div className="p-8 w-full flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-4 items-stretch">
          <DescCard className="flex-1">
            <h1 className="font-bold text-base">Smart Message Routing</h1>
            <p>
              All incoming messages are filtered and routed to the right person
              or department instantly. Say goodbye to missed calls and confusion
              at the front desk.
            </p>
          </DescCard>
          <DescCard className="flex-1">
            <h1 className="font-bold text-base">Auto Booking</h1>
            <p>
              Our virtual receptionist ensures every call is answered
              professionally, 24/7. Ideal for businesses looking to improve
              client communication without hiring full-time staff.
            </p>
          </DescCard>
          <DescCard className="flex-1">
            <h1 className="font-bold text-base">Technologies & Systems</h1>
            <p>
              Let our system manage your bookings efficiently. Clients can
              schedule, reschedule, or cancel appointments anytime—no human
              interaction needed.
            </p>
          </DescCard>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 p-8 w-full mx-auto text-center md:text-left">
        <img src="./src/assets/about.jpg" className="rounded-sm h-[200px]" />
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">
            Superchange your business with virtual Receptionist
          </h1>
          <p className="text-blue-500">
            Enhance your customer experience with a receptionist that never
            sleeps. Our virtual receptionist is designed to handle every call
            and message with speed and accuracy, ensuring no client is ever left
            waiting. Whether it’s scheduling appointments, answering questions,
            or routing inquiries, everything is managed smoothly without the
            need for full-time staff.
          </p>
          <div className="flex flex-row items-center hover:underline transition-colors">
            <a
              href="#"
              className="text-blue-500 font-bold flex justify-start text-center"
            >
              Load More
            </a>
            <UilArrowRight size="28" className="text-blue-500" />
          </div>
        </div>
      </div>

      <div className="w-full h-fit md:h-full px-4 md:px-8 py-8 flex justify-center">
        <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl">
          <iframe
            className="w-full h-full flex justify-center items-center"
            src="https://www.youtube.com/embed/H7P03TzcnEU?si=0Pjg1Wo7J738f1Nk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default About;
