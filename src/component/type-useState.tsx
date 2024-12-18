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
