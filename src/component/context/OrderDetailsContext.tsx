import { createContext, useContext, useState } from "react";

const pricePerItem = {
  scoops: 2,
  toppings: 1.5,
}

type OrderDetailsContextProps = {
  children : React.ReactNode
}

type OptionsCountType = {
    scoops : {[key : string] : number},
    toppings : {[key : string] : number},
}

type SubTotalType = {
  scoops : number;
  toppings : number
}

type UpdateCountType = (a:string, b: number, c:"scoops"|"toppings") => void

type ContextType = {
  optionsCount : OptionsCountType,
  totals : SubTotalType,
  updateItemCount: UpdateCountType;
  resetOrder():void,
} | null


const OrderDetails = createContext<ContextType>(null);

export const useOrderDetails = () => {
  const contextValue = useContext(OrderDetails);

  if (!contextValue) {
    throw Error("useOrderDetails must be called from OrderDetailsProvider");
  }

  return contextValue;
};

export const OrderDetailsProvider = (props:OrderDetailsContextProps) => {
  const [optionsCount, setOptionsCount] = useState<OptionsCountType>({
    scoops: {},
    toppings: {},
  });
  const [subTotal, setSubTotal] = useState<SubTotalType>({
    scoops: 0,
    toppings: 0,
  });

  const  updateItemCount :UpdateCountType = (itemName, newCount, optionType)=> {
    const temp = { ...optionsCount };
    temp[optionType][itemName] = newCount;

    setOptionsCount(temp);

    const total = pricePerItem[optionType] * Object.values(temp[optionType]).reduce((a, c) => a + c);

    const tempTotal = { ...subTotal };

    tempTotal[optionType] = total;

    setSubTotal(tempTotal);
  }

  function resetOrder() {
    setOptionsCount({
      scoops: {},
      toppings: {},
    });

    setSubTotal({
      scoops: 0,
      toppings: 0,
    })
  }


  const value = { optionsCount, updateItemCount, resetOrder, totals:subTotal };

  return <OrderDetails.Provider value={value} {...props} />;
};

// type ArrowFnTypes = (a:number, b:number) => number

// const arrowFn : ArrowFnTypes  = (a,b) => {
//   return a+b
// }