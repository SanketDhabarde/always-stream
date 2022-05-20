import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const useSearch = () => useContext(SearchContext);

const SearchProvider = ({ children }) => {
  const [searchBy, setSearchBy] = useState("");
  return (
    <SearchContext.Provider value={{ searchBy, setSearchBy }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, useSearch };
