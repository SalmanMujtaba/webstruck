import React from "react";

function Button({ children, className }) {
  return (
    <button
      className={`w-[200px] h-[60px] border-webstruck transition-all hover:bg-webstruck hover:text-webstruck-dark  border-4 rounded-lg fill-webstruck text-webstruck button-shadow font-bold ${className}`}>
      {children}
    </button>
  );
}

export default Button;
