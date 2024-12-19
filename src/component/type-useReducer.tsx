import { Reducer, useReducer } from "react";
// import { Equal, Expect } from "../helpers/type-utils";

type ReducerState = {
  count: number;
};

type AddAction = {
  type : "add";
  add : number;
}

type SubAction = {
  type : "subtract";
  subtract : number;
}

type ReducerAction = AddAction | SubAction; 

const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case "add":
      return { count: state.count + action.add };
    case "subtract":
      return { count: state.count - action.subtract };
    default:
      throw new Error();
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });

// type tests = [Expect<Equal<typeof state.count, number>>];

dispatch({ type: "add", add: 1 });

dispatch({ type: "SUBTRACT", subtract: 1 }); // error

dispatch({ type: "add" }); // error

dispatch({ type: "subtract", subtract: "123" }); // error


// const reducer: Reducer<ReducerState, ReducerAction> = (state, action)