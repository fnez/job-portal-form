import React, { createContext, useContext, useState, ReactNode } from "react";
import { AuthContextType } from "../types/Types.ts";
import DataContext from "./DataContext.tsx";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

//Provides authentication state, for access to certain routes.
//Ensures only authenticated users can access.
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data } = useContext(DataContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //Login functionality stored in LocalStorage
  //In Prod, this will be stored within a DB instead.
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth must be within AuthProvider");
  return context;
};
