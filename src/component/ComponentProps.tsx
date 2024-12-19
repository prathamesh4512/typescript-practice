import { ComponentProps } from "react";

// type ButtonProps = ComponentProps<"button">

export const Button = ({ className, ...rest }: ComponentProps<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button" className="temp" 
    style={{
      background:"#f0f0f0"
    }}
  
  ></Button>;
};

export default Parent;
