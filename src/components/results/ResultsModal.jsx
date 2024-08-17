/* eslint-disable react/prop-types */

import { Flex, Loader, Modal } from "@mantine/core";
import SingleResult from "./SingleResult";

const ResultsModal = ({ opened, close, results }) => {
  return (
    <Modal size={"xl"} opened={opened} onClose={close} title="Search results">
      <Flex gap={"1rem"} direction={"column"} align="center">
        {!results?.length && <Loader color="rgba(64, 31, 31, 1)" />}
        {results?.map((result, index) => (
          <SingleResult key={index} result={result} close={close} />
        ))}
      </Flex>
    </Modal>
  );
};

export default ResultsModal;
