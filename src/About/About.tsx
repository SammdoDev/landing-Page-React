import DescCard from "../props/DescCard";
import CardInAbout from "./CardInAbout";
import { UilArrowRight } from "@iconscout/react-unicons";

function About() {
  return (
    <>
      <CardInAbout />

      <div className="p-8 w-full flex flex-col justify-center items-center space-y-4 md:flex-row">
        <DescCard>
          <h1 className="font-bold text-base">Technologies & Systems</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            numquam molestias sequi inventore adipisci. Perferendis deserunt
            enim, libero, asperiores pariatur repellat ratione id voluptas minus
            itaque illo, aut nulla quibusdam.
          </p>
        </DescCard>
        <DescCard>
          <h1 className="font-bold text-base">Technologies & Systems</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            numquam molestias sequi inventore adipisci. Perferendis deserunt
            enim, libero, asperiores pariatur repellat ratione id voluptas minus
            itaque illo, aut nulla quibusdam.
          </p>
        </DescCard>
        <DescCard>
          <h1 className="font-bold text-base">Technologies & Systems</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            numquam molestias sequi inventore adipisci. Perferendis deserunt
            enim, libero, asperiores pariatur repellat ratione id voluptas minus
            itaque illo, aut nulla quibusdam.
          </p>
        </DescCard>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 p-8 max-w-6xl mx-auto text-center md:text-left">
        <img
          src="./src/assets/about.jpeg"
          className="rounded-sm h-[200px]"
        />
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
