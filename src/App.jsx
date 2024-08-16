import { Flex } from "@mantine/core";
import SearchForm from "./components/search/SearchForm";
import { useResultsContext } from "./contexts/results-context/ResultsContextProvider";
import CodeEditor from "./components/code-editor/CodeEditor";
import Introduction from "./components/intro-section/Introduction";
import YouTubeVideo from "./components/youtube-video/YouTubeVideo";
import Footer from "./components/footer/Footer";

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
      {!selectedVideo && <Introduction />}

      <SearchForm />

      {selectedVideo && <YouTubeVideo />}
      {selectedVideo && <CodeEditor />}

      <Footer />
    </Flex>
  );
}
