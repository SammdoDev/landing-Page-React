import type { ReactNode } from "react";

type imgProps = {
  children: ReactNode;
};

function AboutCard({ children }: imgProps) {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-start bg-[#FFFBDE] shadow-2xl rounded-2xl p-4">
        {children}
      </div>
    </>
  );
}

export default AboutCard;
