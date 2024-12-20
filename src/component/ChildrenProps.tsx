import React from "react";

// type declaration
type ButtonProps = {
    children : React.ReactNode
}


// const Button = (props : ButtonProps ) => {

const Button = ({children} : ButtonProps ) => {
    return <button>{children}</button>
}

type ButtonProps2 = {
    comp : React.ReactNode
}

const Button2 = ({comp:Comp} : ButtonProps2 ) => {
    return <div>{Comp}</div>
}


const Parent = () => {
const JsxElement = ()=>(<div>hello</div>)

    return <>
        {/* @ts-expect-error */}
        <Button></Button>

        <Button> </Button>

        <Button2 comp={<JsxElement/>}></Button2>
    </>
}

export default Parent


const abc : React.JSX.Element = (<div><h1></h1></div>)



type ChildType = {
    child: React.ElementType; // Accepts any renderable JSX
   };
   
   
   const Parent1 = ({ child:Child }: ChildType) => {
    return <Child></Child>;
   };
   
   
   // Usage
   <Parent1 child={"div"} />;