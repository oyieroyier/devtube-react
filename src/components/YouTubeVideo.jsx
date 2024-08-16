import { useResultsContext } from "../contexts/results-context/ResultsContextProvider";

const YouTubeVideo = () => {
  const { selectedVideo } = useResultsContext();

  return (
    <iframe
      className="h-[50vh] w-full"
      src={`https://www.youtube.com/embed/${selectedVideo}`}
      allow="fullscreen"
    ></iframe>
  );
};

export default YouTubeVideo;
