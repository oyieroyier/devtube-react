import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./codeSnippets";
import CodeOutput from "./CodeOutput";
import SupportedLanguagesContextProvider from "../../contexts/supported-languages-context/SupportedLanguagesContextProvider";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");

  const [language, setLanguage] = useState("javascript");

  function onMount(editor) {
    editorRef.current = editor;
    editor.focus();
  }

  function onSelect(language) {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  }

  return (
    <div className="w-full">
      <SupportedLanguagesContextProvider>
        <div className="flex flex-col gap-2 md:gap-4 lg:flex-row">
          <div className="h-full w-full flex-1">
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
              height="50vh"
              theme="vs-dark"
              language={language}
              defaultValue="//Some comment"
              value={value}
              onChange={(value) => setValue(value)}
              onMount={onMount}
            />
          </div>
          <CodeOutput editorRef={editorRef} language={language} />
        </div>
      </SupportedLanguagesContextProvider>
    </div>
  );
};

export default CodeEditor;
