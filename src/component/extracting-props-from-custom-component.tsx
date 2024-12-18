// Imagine NavBar is coming from an external library!

export const NavBar = (props: {
    title: string;
    links: string[];
    children: React.ReactNode;
  }) => {
    return <div>Some content</div>;
  };
  

  // Your app:
  
  import { Equal, Expect } from "../helpers/type-utils";
  import { ComponentProps } from "react";
  type NavBarProps = ComponentProps<typeof NavBar>;
  
  type test = Expect<
    Equal<
      NavBarProps,
      {
        title: string;
        links: string[];
        children: React.ReactNode;
      }
    >
  >;