export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `//JavaScript sample code\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Developer");\n`,
  typescript: `//TypeScript sample code\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Developer" });\n`,
  python: `# Python sample code\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Developer")\n`,
  java: `//Java sample code\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
    '//C-Sharp sample code\nusing System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "//PHP sample code.\n<?php\n\n$name = 'Developer';\necho $name;\n",
};