import type { ReactNode } from "react";

type imgProps = {
  children: ReactNode;
  className?: string;
};

function DescCard({ children, className = "" }: imgProps) {
  return (
    <div
      className={`w-full flex flex-col justify-center items-start bg-[#FFFBDE] border-b-8 border-blue-500 shadow-2xl p-4 ${className}`}
    >
      {children}
    </div>
  );
}

export default DescCard;
