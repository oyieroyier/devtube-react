/* eslint-disable react/prop-types */
import { useState } from "react";
import { Select } from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import ConfirmLanguageChangeModal from "./ConfirmLanguageChangeModal";
import { useSupportedLanguagesContext } from "../../contexts/supported-languages-context/SupportedLanguagesContextProvider";

const LanguageSelector = ({ language, onSelect }) => {
  const { supportedLanguages } = useSupportedLanguagesContext();

  const languages = Object.entries(supportedLanguages);

  const languageOptionsInDropdown = languages.map(([language, version]) => {
    return `${upperFirst(language)}, ${version}`;
  });

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
        value={`${upperFirst(language)}, ${supportedLanguages[language]}`}
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
