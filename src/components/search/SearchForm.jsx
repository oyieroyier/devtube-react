import Search from "./Search";
import { useDisclosure } from "@mantine/hooks";
import { useSearchContextProvider } from "../../contexts/search-context/SearchContextProvider";
import { useResultsContext } from "../../contexts/results-context/ResultsContextProvider";
import ResultsModal from "../results/ResultsModal";
const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

const SearchForm = () => {
  const { search, setSearch } = useSearchContextProvider();
  const { results, updateResults } = useResultsContext();
  const [opened, { open, close }] = useDisclosure(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    open();

    setSearch("");

    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=2&q=${search}`,
    )
      .then((response) => response.json())
      .then(({ items }) => updateResults(items));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Search />
      </form>
      <ResultsModal opened={opened} close={close} results={results} />
    </div>
  );
};

export default SearchForm;
