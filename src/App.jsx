import SearchForm from "./components/search/SearchForm";
import ResultsContextProvider from "./contexts/results-context/ResultsContextProvider";
import SearchContextProvider from "./contexts/search-context/SearchContextProvider";

export default function App() {
  return (
    <SearchContextProvider>
      <ResultsContextProvider>
        <SearchForm />
      </ResultsContextProvider>
    </SearchContextProvider>
  );
}
