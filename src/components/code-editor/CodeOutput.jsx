/* eslint-disable react/prop-types */
import { Button, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { executeCode } from "../../api";
import { useState } from "react";
import { BiCode } from "react-icons/bi";

const CodeOutput = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function runCode() {
    const sourceCode = editorRef.current.getValue();

    if (!sourceCode) return;

    try {
      setLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));

      result.stderr ? setError(true) : setError(false);
    } catch (error) {
      notifications.show({
        position: "top-right",
        autoClose: 5000,
        color: "red",
        withCloseButton: true,
        title: "An error has occurred!",
        message: error.message || "Unable to run code",
      });
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div>
        <Text size="sm" fw="bold">
          Output
        </Text>
        <Button color="#333" loading={loading} onClick={runCode}>
          <div className="flex items-center gap-1 text-lg">
            <BiCode /> <span>Run Code</span>
          </div>
        </Button>
      </div>
      <div
        className={`" h-full rounded-sm bg-black/90 p-4 font-mono ${error ? "border border-red-500 text-red-500" : "text-slate-300"}`}
      >
        {output ? (
          output.map((line, index) => <p key={index}>{line}</p>)
        ) : (
          <p className="h-full">Click &quot;Run Code&quot; to see the output</p>
        )}
      </div>
    </div>
  );
};

export default CodeOutput;
