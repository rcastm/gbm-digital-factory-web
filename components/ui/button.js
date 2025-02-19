import React from "react";

export const Button = ({ children, className, ...props }) => (
  <button
    className={`bg-blue-500 text-white py-2 px-4 rounded-2xl shadow-lg ${className}`}
    {...props}
  >
    {children}
  </button>
);
