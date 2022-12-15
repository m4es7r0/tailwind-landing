import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`${styles} py-4 px-8 bg-blue-gradient font-poppins font-medium text-lg rounded-[10px]`}
    >
      Get Started
    </button>
  );
};

export default Button;
