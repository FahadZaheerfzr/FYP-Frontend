import React from "react";

const Logo = (props) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-600 mt-2 inline-flex items-center ${fontStyle}`}>
      <img className='w-40 hover:scale-110 hover:cursor-pointer transform transition-all duration-300'  src='/images/logo.png' alt='app-logo' />

    </span>
  );
};

export { Logo };
