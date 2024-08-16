import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");

  function onMount(editor) {
    editorRef.current = editor;
    editor.focus();
  }

  return (
		<div>
			<LanguageSelector />
			<Editor
				height="50vh"
				theme="vs-dark"
				defaultLanguage="javascript"
				defaultValue="//Some comment"
				value={value}
				onChange={(value) => setValue(value)}
				onMount={onMount}
			/>
		</div>
  );
};

export default CodeEditor;
