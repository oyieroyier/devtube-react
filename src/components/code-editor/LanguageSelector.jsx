import { Select } from "@mantine/core";
import { LANGUAGE_VERSIONS } from "./constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

const languageOptions = languages.map(([language, version]) => {
  return `${language}, ${version}`;
});

const LanguageSelector = () => {
  return (
    <div>
      <Select
        label="Select a Programming Language:"
        placeholder="Click Here"
        data={languageOptions}
        defaultValue="React"
        allowDeselect={false}
      />
    </div>
  );
};

export default LanguageSelector;
