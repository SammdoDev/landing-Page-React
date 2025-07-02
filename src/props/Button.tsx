import type { ReactNode } from "react";

type buttonProps = {
  children: ReactNode;
}

function Button({ children }: buttonProps) {
  return (
    <>
      <button className="bg-[#5EABD6] px-4 py-2 rounded-sm text-white font-semibold">
        {children}
      </button>
    </>
  );
}

export default Button;
