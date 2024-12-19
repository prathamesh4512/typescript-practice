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


// Another way

type ButtonProps2  = {
  className: string,
  children: React.ReactNode,
  handleClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,n:number)=>void,
}

export const Button2 = ({ children, className, handleClick }: ButtonProps2) => {
return (
  <button onClick={(e)=>handleClick(e,10)} className={className}>
    {children}
  </button>
);
};