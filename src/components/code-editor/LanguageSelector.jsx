/* eslint-disable react/prop-types */
import { Select } from "@mantine/core";
import { LANGUAGE_VERSIONS } from "./constants";
import { lowerFirst, upperFirst } from "@mantine/hooks";

const languages = Object.entries(LANGUAGE_VERSIONS);

const languageOptionsInDropdown = languages.map(([language, version]) => {
  return `${upperFirst(language)}, ${version}`;
});

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div>
      <Select
        label="Select a Programming Language:"
        placeholder="Click Here"
        data={languageOptionsInDropdown}
        defaultValue={language}
        allowDeselect={false}
        onChange={(e) => onSelect(lowerFirst(e).split(",")[0])}
      />
    </div>
  );
};

export default LanguageSelector;
