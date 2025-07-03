import AboutCard from "../props/AboutCard.tsx";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Programs() {
  const percentages = [66, 70, 80];
  const descriptions = [
    "of our clients saw improved efficiency",
    "customer satisfaction within 3 months",
    "of tasks are automated successfully",
  ];

  return (
    <div className="w-full p-8 flex flex-col md:space-x-4 space-y-4 md:space-y-0 mt-4 items-stretch">
      <h1 className="text-lg font-bold text-[#5EABD6]">Why Hire CService</h1>

      <div className="w-full mt-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-24">
        {percentages.map((percent, i) => (
          <AboutCard key={i}>
            <div className="flex flex-row justify-center items-center space-x-4">
              <div className="w-[80px] h-[80px] relative">
                <CircularProgressbar
                  value={percent}
                  text={`${percent}%`}
                  styles={buildStyles({
                    textColor: "#3B82F6",
                    pathColor: "#3B82F6",
                    trailColor: "#E5E7EB",
                  })}
                />
              </div>
              <p className="text-sm">{descriptions[i]}</p>
            </div>
          </AboutCard>
        ))}
      </div>
    </div>
  );
}

export default Programs;
