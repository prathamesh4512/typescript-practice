// useState<string>("")
// useState<number>("")
// useState<[number[]]>([])
// useState<{
//     id: number
//     value: string
//   }[]>([])

import { useState } from "react";

export const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });
  return (
    <div>
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState((currentState) :TagState => ({
                ...currentState,
                // tagselected: tag.id,
              }));
            }}
          >
            {tag.value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setState((currentState) : TagState => ({
            ...currentState,
            tags: [
              ...currentState.tags,
              {
                id: new Date().getTime(),
                value: "New",
                // otherValue: "something",
              },
            ],
          }));
        }}
      >
        Add Tag
      </button>
    </div>
  );
};

type TagState = {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
};

type GetTagState = () => TagState;

const getTagState: GetTagState = () :TagState => ({
  tagSelected: 1,
  tags: [],
//   awdawd: 124123,
});



export const StateType = () => {

  const [state1,setState1] = useState(1)
  const [state2,setState2] = useState("2")  
  const [state3,setState3] = useState(true)
  const [state4,setState4] = useState({a:10}) // {a:number}
  const [state5,setState5] = useState([])  // never[]
  const [state6,setState6] = useState([1])  // number[]
  const [state7,setState7] = useState([{a:10}])  // {a:number}[]

  setState1("1")  // only number
  setState2(1)  // only string
  setState3(0)  // only true or false
  
  setState4({a:"1"})  // only {a:number}
  setState4({a:1, b:10})  // only {a:number}
  setState5({})  // only []
  
  setState5([1]) // error type number is not assignable to type never
  setState6([1,"1"])  // only array of number

  setState7([{b:1}])  // only array of {a:number}

}



type AuthUser = {
  name: string;
  email: string;
}

const [user, setUser] = useState<AuthUser>({} as AuthUser)