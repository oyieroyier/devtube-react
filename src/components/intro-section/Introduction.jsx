import { Flex, Text } from "@mantine/core";

const Introduction = () => {
  return (
    <Flex direction="column" gap={"1rem"}>
      <Text size="2rem" ta="center" className="font-headings">
        DevTube
      </Text>
      <Text size="1.5rem" ta="center" className="font-minorHeading">
        Watch YouTube tutorials and code right here— your all-in-one coding
        playground!
      </Text>
    </Flex>
  );
};

export default Introduction;
