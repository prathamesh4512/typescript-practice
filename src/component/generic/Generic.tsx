import { ReactNode, useState } from "react";

type Props<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

const List = <T,>(props: Props<T>) => {
    const { items, renderItem } = props;
    const [state, setState] = useState<T[]>([]);
  
    return (
      <div>
        {items.map(renderItem)}
        <button onClick={() => setState(items)}>Clone</button>
        {JSON.stringify(state, null, 2)}
      </div>
    );
  };
  

export default List;




<List<number>
    items={[1, 2]} // Error: Type 'string' is not assignable to type 'number'.
    renderItem={(item) => <li key={item}>{item.toPrecision(3)}</li>}
  />