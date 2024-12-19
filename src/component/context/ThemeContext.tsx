import { createContext, useContext } from "react";
import { theme } from "./theme";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext(theme);

export const useThemeContext = () => {
   const contextValue =  useContext(ThemeContext)

   if(contextValue === undefined) {
    throw Error("useThemeContext must be called from ThemeContextProvider")
   }

   return contextValue; 
}


export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};


{/* <ThemeContextProvider>
    <App />
</ThemeContextProvider> */}

// import useThemeContext  from "../context/Themecontext";

// const Box = () => {
//     const theme =  useThemeContext()

//     // theme.primary.text

// }