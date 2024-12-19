

type ChildType = {
  child: React.ComponentType<{
    className?: string;
  }>;
};

const Parent = ({ child: Child }: ChildType) => {
  return (
    <div>
      <Child className="h-8 w-8" />
    </div>
  );
};

const Child = () => {
  return <div>Child</div>;
};

<Parent child={Child} />;
