import { Flex, Text } from "@mantine/core";
import SearchForm from "./components/search/SearchForm";
import { useResultsContext } from "./contexts/results-context/ResultsContextProvider";
import YouTubeVideo from "./components/YouTubeVideo";

export default function App() {
  const { selectedVideo } = useResultsContext();

  return (
    <Flex
      direction="column"
      justify={selectedVideo ? "flex-start" : "center"}
      align={selectedVideo ? "flex-end" : "center"}
      gap="1rem"
      className="min-h-screen p-4 lg:p-8"
    >
      {!selectedVideo && (
        <>
          <Text size="2rem" ta="center" className="font-headings">
            DevTube
          </Text>
          <Text size="1.5rem" ta="center" className="font-minorHeading">
            Stream YouTube tutorials and code right here—your all-in-one coding
            playground!
          </Text>
        </>
      )}
      <SearchForm />

      {selectedVideo && <YouTubeVideo />}
      <div id="lower_section"></div>
    </Flex>
  );
}
