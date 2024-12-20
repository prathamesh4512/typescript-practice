type All = {
    a: string;
    b: string;
  }
  
  type Nothing = Record<string, never>;
  
  const AllOrNothing = (props: All | Nothing) => {
    if ("a" in props) {
      return <>{props.b}</>;
    }
    return <>Nothing</>;
  };
  
  const Component = () => (
    <>
      <AllOrNothing /> {/* ok */}
      <AllOrNothing a="" /> {/* error */}
      <AllOrNothing b="" /> {/* error */}
      <AllOrNothing a="" b="" /> {/* ok */}
    </>
  );



  interface Props {
    obj?: {
      a: string;
      b: string;
    };
  }
  
  const AllOrNothing2 = (props: Props) => {
    if (props.obj) {
      return <>{props.obj.a}</>;
    }
    return <>Nothing</>;
  };
  
  const Component2 = () => (
    <>
      <AllOrNothing2 /> {/* ok */}
      <AllOrNothing2 obj={{ a: "" }} /> {/* error */}
      <AllOrNothing2 obj={{ b: "" }} /> {/* error */}
      <AllOrNothing2 obj={{ a: "", b: "" }} /> {/* ok */}
    </>
  );