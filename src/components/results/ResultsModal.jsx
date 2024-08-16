/* eslint-disable react/prop-types */

import { Flex, Modal } from "@mantine/core";
import SingleResult from "./SingleResult";

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
          <SingleResult key={index} result={result} close={close} />
        ))}
      </Flex>
    </Modal>
  );
};

export default ResultsModal;
