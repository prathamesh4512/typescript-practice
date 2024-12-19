import { useState } from "react";

const Generic = () => {
  function genericFunction<T>(arr: T[]): T {
    return arr[0];
    // return arr.reduce((a,c)=>a+c)
  }
};

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, idx) => {
        return (
          <div key={idx} onClick={() => onClick(item)}>
            {item as React.ReactNode}
          </div>
        );
      })}
    </div>
  );
};

<List items={[1, 2]} onClick={() => {}} />;
<List items={["a", "b"]} onClick={() => {}} />;


type AuthUser = {
 name: string;
 email: string;
}


const [user, setUser] = useState<AuthUser | {} >()

