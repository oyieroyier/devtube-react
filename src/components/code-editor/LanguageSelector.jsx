/* eslint-disable react/prop-types */
import { useState } from "react";
import { Select } from "@mantine/core";
import { LANGUAGE_VERSIONS } from "./constants";
import { upperFirst } from "@mantine/hooks";
import ConfirmLanguageChangeModal from "./ConfirmLanguageChangeModal";

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

      <ConfirmLanguageChangeModal
        pendingLanguage={pendingLanguage}
        setModalOpen={setModalOpen}
        onSelect={onSelect}
        modalOpen={modalOpen}
      />
    </div>
  );
};

export default LanguageSelector;
