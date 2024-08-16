/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import ResultsContext from "./ResultsContext";

const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);

  // context methods
  const updateResults = (newResults) => {
    setResults(newResults);
  };

  // context values
  const contextValue = {
    results,
    updateResults,
  };

  return (
    <ResultsContext.Provider value={contextValue}>
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;

export const useResultsContext = () => {
  const context = useContext(ResultsContext);
  if (!context) {
    throw new Error("useResultsContext must be used within a ResultsProvider");
  }
  return context;
};
