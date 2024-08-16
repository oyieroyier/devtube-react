import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";

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
  }

  return (
    <div className="w-full">
      <LanguageSelector language={language} onSelect={onSelect} />
      <Editor
        height="50vh"
        width={"100%"}
        theme="vs-dark"
        language={language}
        defaultValue="//Some comment"
        value={value}
        onChange={(value) => setValue(value)}
        onMount={onMount}
      />
    </div>
  );
};

export default CodeEditor;
