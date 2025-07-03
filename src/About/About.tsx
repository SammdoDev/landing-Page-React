import DescCard from "../props/DescCard";
import CardInAbout from "./Programs";
import { UilArrowRight } from "@iconscout/react-unicons";

function About() {
  return (
    <>
      <CardInAbout />

      <div className="w-full flex justify-center">
        <div className="p-8 w-full max-w-6xl flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-4 items-stretch">
          <DescCard className="flex-1">
            <h1 className="font-bold text-base">Technologies & Systems</h1>
            <p>
              All incoming messages are filtered and routed to the right person
              or department instantly. Say goodbye to missed calls and confusion
              at the front desk.
            </p>
          </DescCard>
          <DescCard className="flex-1">
            <h1 className="font-bold text-base">Technologies & Systems</h1>
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

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 p-8 max-w-6xl mx-auto text-center md:text-left">
        <img src="./src/assets/about.jpeg" className="rounded-sm h-[200px]" />
        <div className="flex flex-col space-y-8">
          <h1 className="text-2xl font-bold">
            Superchange your business with virtual Receptionist
          </h1>
          <p className="text-blue-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            deleniti rerum repudiandae quas laudantium, quam facere vero quo
            quae itaque consequatur quos! Molestias neque eveniet consectetur
            vel perspiciatis maiores dignissimos!
          </p>
          <div className="flex flex-row items-center">
            <a
              href="#"
              className="text-blue-500 font-bold flex justify-start text-center"
            >
              Load More
            </a>
            <UilArrowRight size="32" color="black" />
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
