import React, { createContext, useState, ReactNode } from "react";

interface CryptoContextProps {
  coins: any[]; 
  setCoins: React.Dispatch<React.SetStateAction<any[]>>; 
}

export const CryptoContext = createContext<CryptoContextProps | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [coins, setCoins] = useState<any[]>([]); 

  const value: CryptoContextProps = {
    coins,
    setCoins
  };

  return (
    <CryptoContext.Provider value={value}>
      {children}
    </CryptoContext.Provider>
  );
};
