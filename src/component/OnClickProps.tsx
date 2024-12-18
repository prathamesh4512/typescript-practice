import React from 'react';

type ButtonProps  = {
    className: string,
    children: React.ReactNode,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
  }

export const Button = ({ children, className, handleClick }: ButtonProps) => {
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};
// or
// onClick={(e) => handleClick(e)}