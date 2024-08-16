/* eslint-disable react/prop-types */
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { useResultsContext } from "../../contexts/results-context/ResultsContextProvider";

const SingleResult = ({ result, close }) => {
  const { setSelectedVideo } = useResultsContext();

  function handleClick() {
    setSelectedVideo(result.id.videoId);
    close();
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={result.snippet.thumbnails.high.url}
          height={50}
          alt={result.snippet.title}
        />
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}> {result.snippet.title}</Text>
        <Badge color="#333">{result.snippet.channelTitle}</Badge>
      </Group>
      <Text size="sm" c="dimmed">
        {result.snippet.description}
      </Text>
      <Button color="#333" fullWidth mt="md" radius="md" onClick={handleClick}>
        Watch Now
      </Button>
    </Card>
  );
};

export default SingleResult;
