import { createContext, useContext } from "react";

const AppContext = createContext({} as any);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used in a context");
  return context;
};

export default function AppProvider({ children, state }) {
  return (
    <AppContext.Provider value={[...state]}>{children}</AppContext.Provider>
  );
}
