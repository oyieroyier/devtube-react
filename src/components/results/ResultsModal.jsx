/* eslint-disable react/prop-types */

import { Flex, Loader, Modal } from "@mantine/core";
import SingleResult from "./SingleResult";
import { useSearchContext } from "../../contexts/search-context/SearchContextProvider.jsx";

const ResultsModal = ({ opened, close, results }) => {
  const { search, setSearch } = useSearchContext();

  const closeModal = () => {
    setSearch("");
    close();
  };

  return (
    <Modal
      size={"xl"}
      opened={opened}
      onClose={closeModal}
      title={`Search results for "${search}"`}
    >
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
