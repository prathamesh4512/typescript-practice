import { ComponentProps } from "react";

// type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> & TOverridden;

// type InputProps = OverrideProps<
//   ComponentProps<"input">,
//   {
//     onChange: (value: string) => void;
//   }
// >;

type InputProps = Omit<ComponentProps<"input">,"onChange"> & {
    onChange: (value: string) => void
 } 

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      onChange={(e) => props.onChange(e.target.value)}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);
      }}
    ></Input>
  );
};

export default Parent;