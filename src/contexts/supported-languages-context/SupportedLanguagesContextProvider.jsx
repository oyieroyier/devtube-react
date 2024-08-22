/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useContext, useEffect, useState } from "react";
import { API, LANGUAGE_VERSIONS } from "../../api";
import SupportedLanguagesContext from "./SupportedLanguagesContext";

const SupportedLanguagesContextProvider = ({ children }) => {
  const [supportedLanguages, setSupportedLanguages] = useState({});

  const updatedLanguages = { ...supportedLanguages };

  useEffect(() => {
    API.get("/runtimes")
      .then((r) => {
        if (!r.data) {
          throw new Error(r.statusText);
        }
        return r.data;
      })
      .then((d) => {
        d.map(({ language, version }) => {
          Object.assign(LANGUAGE_VERSIONS, {
            [language]: version,
          });

          updatedLanguages[language] = version;
        });
        setSupportedLanguages(updatedLanguages);
      });
  }, []);

  const contextValues = { supportedLanguages };

  return (
    <SupportedLanguagesContext.Provider value={contextValues}>
      {children}{" "}
    </SupportedLanguagesContext.Provider>
  );
};

export default SupportedLanguagesContextProvider;

export const useSupportedLanguagesContext = () => {
  const context = useContext(SupportedLanguagesContext);
  if (!context) {
    throw new Error(
      "useSupportedLanguagesContext must be used within a SupportedLanguagesContextProvider",
    );
  }

  return context;
};
