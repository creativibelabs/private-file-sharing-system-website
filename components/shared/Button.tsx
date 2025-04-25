import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="rounded-full md:text-lg px-8 py-3 border border-emerald-700 overflow-hidden hover:bg-emerald-500/80 bg-gradient-to-r from-emerald-950 to-emerald-600/50 ">
      {text}
    </button>
  );
};

export default Button;
