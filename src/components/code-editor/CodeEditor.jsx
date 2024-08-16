import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./constants";
import CodeOutput from "./CodeOutput";

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
        <CodeOutput editorRef={editorRef} language={language} value={value} />{" "}
      </div>
    </div>
  );
};

export default CodeEditor;
