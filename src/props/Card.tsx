import type { ReactNode } from "react";

type imgProps = {
  children: ReactNode;
};

function Card({ children }: imgProps) {
  return (
    <>
      <div className="flex flex-col justify-center items-start bg-[#FFFBDE] shadow-2xl rounded-2xl p-4">
        {children}
      </div>
    </>
  );
}

export default Card;
