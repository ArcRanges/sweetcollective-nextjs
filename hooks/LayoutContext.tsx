import { createContext, useContext } from "react";

const LayoutContext = createContext({} as any);

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) throw new Error("useLayoutContext must be used in a context");
  return context;
};

export default function LayoutProvider({ children, state }) {
  return (
    <LayoutContext.Provider value={[...state]}>
      {children}
    </LayoutContext.Provider>
  );
}
