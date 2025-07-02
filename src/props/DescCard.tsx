import type { ReactNode } from "react";

type imgProps = {
  children: ReactNode;
};

function DescCard({ children }: imgProps) {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-start bg-[#FFFBDE] border-b-8 border-blue-500 shadow-2xl p-4 mx-8">
        {children}
      </div>
    </>
  );
}

export default DescCard;
