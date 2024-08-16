/* eslint-disable react/prop-types */

import { Flex, Modal } from "@mantine/core";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

const ResultsModal = ({ opened, close, results }) => {
  console.log(results);

  return (
    <Modal
      size={"xl"}
      opened={opened}
      onClose={close}
      title="YouTube Search Results"
    >
      <Flex gap={"1rem"} direction={"column"}>
        {results?.map((result, index) => (
          <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
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
            <Button color="#333" fullWidth mt="md" radius="md">
              Watch Now
            </Button>
          </Card>
        ))}
      </Flex>
    </Modal>
  );
};

export default ResultsModal;
