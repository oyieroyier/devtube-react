/* eslint-disable react/prop-types */
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { useResultsContext } from "../../contexts/results-context/ResultsContextProvider";
import { useSearchContext } from "../../contexts/search-context/SearchContextProvider";

const SingleResult = ({ result, close }) => {
  const { setSelectedVideo } = useResultsContext();
  const { setSearch } = useSearchContext();

  function handleClick() {
    setSelectedVideo(result.id.videoId);
    setSearch("");
    close();
  }

  return (
    <Card shadow="sm" radius="md" withBorder>
      <div className="flex flex-col items-center lg:flex-row lg:gap-4">
        <Card.Section>
          <Image
            src={result.snippet.thumbnails.high.url}
            alt={result.snippet.title}
          />
        </Card.Section>
        <div className="lg:p-4">
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}> {result.snippet.title}</Text>
            <Badge color="#333">{result.snippet.channelTitle}</Badge>
          </Group>
          <Text size="sm" c="dimmed">
            {result.snippet.description}
          </Text>
          <Button
            color="#333"
            fullWidth
            mt="md"
            radius="md"
            onClick={handleClick}
          >
            Watch Now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SingleResult;
