/* eslint-disable react/prop-types */
import { Button, Text } from "@mantine/core";
import { executeCode } from "../../api";
import { useState } from "react";

const CodeOutput = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  async function runCode() {
    const sourceCode = editorRef.current.getValue();

    if (!sourceCode) return;

    try {
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output);
    } catch (error) {
      throw new Error(error);
    }
  }
  return (
    <div className="flex-1">
      <Text>Output</Text>
      <Button onClick={runCode}>Run Code</Button>
      <div className="h-5/6 rounded-sm bg-black/40">
        {output ? output : `Click "Run Code" to see the output`}
      </div>
    </div>
  );
};

export default CodeOutput;
