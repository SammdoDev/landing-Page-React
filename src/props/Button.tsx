import type { ReactNode } from "react";

type buttonProps = {
  children: ReactNode;
  className? : string
}

function Button({ children, className }: buttonProps) {
  return (
    <>
      <button className={`bg-blue-500 px-4 py-2 rounded-sm font-semibold ${className}`}>
        {children}
      </button>
    </>
  );
}

export default Button;
