import { useState, createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [style, setStyle] = useState(false);

  const handleClick = () => {
    setStyle(!style);
  };

  return (
    <AppContext.Provider
      value={{
        style,
        setStyle,
        handleClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
