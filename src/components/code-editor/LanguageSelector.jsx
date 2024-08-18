/* eslint-disable react/prop-types */
import { useState } from "react";
import { Select, Modal, Button, Flex, Box } from "@mantine/core";
import { LANGUAGE_VERSIONS } from "./constants";
import { lowerFirst, upperFirst } from "@mantine/hooks";

const languages = Object.entries(LANGUAGE_VERSIONS);

const languageOptionsInDropdown = languages.map(([language, version]) => {
  return `${upperFirst(language)}, ${version}`;
});

const LanguageSelector = ({ language, onSelect }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingLanguage, setPendingLanguage] = useState(null);

  const handleLanguageChange = (selectedLanguage) => {
    setPendingLanguage(selectedLanguage);
    setModalOpen(true);
  };

  const confirmLanguageChange = () => {
    onSelect(lowerFirst(pendingLanguage).split(",")[0]);
    setModalOpen(false);
  };

  return (
    <div>
      <Select
        label="Select a Programming Language:"
        placeholder="Click Here"
        data={languageOptionsInDropdown}
        value={`${upperFirst(language)}, ${LANGUAGE_VERSIONS[language]}`}
        allowDeselect={false}
        onChange={handleLanguageChange}
      />

      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Warning"
      >
        <Flex direction="column" gap="lg">
          <Box>
            <p>
              Changing the programming language will clear all code currently in
              the editor.
            </p>
            <p>Are you sure you want to proceed?</p>
          </Box>
          <Flex justify="center" gap="xl">
            <Button onClick={confirmLanguageChange} bg="#333">
              Confirm
            </Button>
            <Button onClick={() => setModalOpen(false)} color="#666">
              Cancel
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </div>
  );
};

export default LanguageSelector;
