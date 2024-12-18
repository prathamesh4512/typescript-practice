import React from "react";

// type declaration
type ButtonProps = {
    children : React.ReactNode
}

const a = 2 + "2"; 
console.log(a)

// const Button = (props : ButtonProps ) => {

const Button = ({children} : ButtonProps ) => {
    return <button>{children}</button>
}

const Parent = () => {
    return <>
        {/* @ts-expect-error */}
        <Button></Button>

        <Button> </Button>
    </>
}

export default Parent