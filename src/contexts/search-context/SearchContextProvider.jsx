/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { useState, useContext } from "react";
import SearchContext from "./SearchContext";

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const contextValue = {
    search,
		handleSearch,
		setSearch
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider",
    );
  }

  return context;
};
