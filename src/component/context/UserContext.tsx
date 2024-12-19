import { createContext, useState } from "react";

type UserContextProviderProps = {
  children: React.ReactNode;
};

type AuthUser = {
  name: string;
  email: string;
} | null;

type UserContextType = {
  user: AuthUser;
  updateUser: (v: AuthUser) => void;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser>(null);

  const updateUser = (value: AuthUser) => {
    setUser(value);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};