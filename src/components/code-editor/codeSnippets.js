export const CODE_SNIPPETS = {
  // Awk
  awk: `# Awk sample code\nBEGIN { print "Hello, Developer!" }\n`,

  // Bash
  bash: `# Bash sample code\necho "Hello, Developer!"\n`,

  // BASIC
  basic: `REM BASIC sample code\nPRINT "Hello, Developer!"\n`,

  // BASIC.NET
  basicnet: `REM BASIC.NET sample code\nModule HelloWorld\n    Sub Main()\n        Console.WriteLine("Hello, Developer!")\n    End Sub\nEnd Module\n`,

  // Befunge93
  befunge93: `# Befunge-93 sample code\n"!dlroW olleH",,,,,,,,,,,,,@`,

  // BQN
  bqn: `# BQN sample code\n"Hello, Developer!"\n`,

  // Brachylog
  brachylog: `# Brachylog sample code\n"Hello, Developer!"\n`,

  // Brainfuck
  brainfuck: `# Brainfuck sample code\n+[----->+++<]>++.+++++++..+++.>>>++++++++[<+++++++>-.<+++++++>>+.<-]\n`,

  // C
  c: `//C sample code\n#include <stdio.h>\n\nint main() {\n\tprintf("Hello, Developer!\\n");\n\treturn 0;\n}\n`,

  // C++
  cpp: `//C++ sample code\n#include <iostream>\n\nint main() {\n\tstd::cout << "Hello, Developer!" << std::endl;\n\treturn 0;\n}\n`,

  // CJam
  cjam: `# CJam sample code\n"Hello, Developer!"\n`,

  // Clojure
  clojure: `;; Clojure sample code\n(println "Hello, Developer!")\n`,

  // COBOL
  cobol: `IDENTIFICATION DIVISION.\nPROGRAM-ID. HelloWorld.\nPROCEDURE DIVISION.\nDISPLAY 'Hello, Developer!'.\nSTOP RUN.\n`,

  // CoffeeScript
  coffeescript: `# CoffeeScript sample code\ngreet = (name) -> console.log "Hello, #{name}!"\ngreet "Developer"\n`,

  // Cow
  cow: `# Cow sample code\nMoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO "`,

  // Crystal
  crystal: `# Crystal sample code\nputs "Hello, Developer!"\n`,

  // D
  d: `//D sample code\nimport std.stdio;\nvoid main() {\n\twriteln("Hello, Developer!");\n}\n`,

  // Dart
  dart: `//Dart sample code\nvoid main() {\n\tprint('Hello, Developer!');\n}\n`,

  // Dash
  dash: `# Dash sample code\necho "Hello, Developer!"\n`,

  // Dragon
  dragon: `# Dragon sample code\nprint("Hello, Developer!")\n`,

  // Elixir
  elixir: `# Elixir sample code\nIO.puts "Hello, Developer!"\n`,

  // Emacs Lisp
  emacs: `;; Emacs Lisp sample code\n(message "Hello, Developer!")\n`,

  // Emojicode
  emojicode: `# Emojicode sample code\n😀 🔤Hello, Developer!🔤 😀\n🍇 🍉\n`,

  // Erlang
  erlang: `%% Erlang sample code\n-module(hello).\n-export([greet/0]).\ngreet() -> io:format("Hello, Developer!~n").\n`,

  // File
  file: `# File sample code\nprint("Hello, Developer!")\n`,

  // Forte
  forte: `# Forte sample code\nsay "Hello, Developer!"\n`,

  // Forth
  forth: `\n# Forth sample code\n." Hello, Developer!"\n`,

  // Fortran
  fortran: `! Fortran sample code\nPROGRAM HELLO\n  PRINT *, 'Hello, Developer!'\nEND PROGRAM HELLO\n`,

  // FreeBASIC
  freebasic: `# FreeBASIC sample code\nPRINT "Hello, Developer!"\n`,

  // F#
  fsharpnet: `//F# sample code\nprintfn "Hello, Developer!"\n`,

  // FSI
  fsi: `//FSI sample code\nprintfn "Hello, Developer!"\n`,

  // Go
  go: `//Go sample code\npackage main\nimport "fmt"\nfunc main() {\n\tfmt.Println("Hello, Developer!")\n}\n`,

  // GolfScript
  golfscript: `# GolfScript sample code\n"Hello, Developer!"\n`,

  // Groovy
  groovy: `//Groovy sample code\nprintln 'Hello, Developer!'\n`,

  // Haskell
  haskell: `-- Haskell sample code\nmain :: IO ()\nmain = putStrLn "Hello, Developer!"\n`,

  // Husk
  husk: `-- Husk sample code\n(main :: IO ()) -> putStrLn "Hello, Developer!"\n`,

  // Icarus Verilog
  iverilog: `//Verilog sample code\nmodule Hello;\ninitial begin\n\t$display("Hello, Developer!");\n\t$finish;\nend\nendmodule\n`,

  // Japt
  japt: `# Japt sample code\n"Hello, Developer!"\n`,

  // Java
  java: `//Java sample code\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello, Developer!");\n\t}\n}\n`,

  // JavaScript
  javascript: `//JavaScript sample code\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Developer");\n`,

  // Jelly
  jelly: `# Jelly sample code\n“Hello, Developer!”\n`,

  // Julia
  julia: `# Julia sample code\nprintln("Hello, Developer!")\n`,

  // Kotlin
  kotlin: `//Kotlin sample code\nfun main() {\n\tprintln("Hello, Developer!")\n}\n`,

  // Lisp
  lisp: `;; Lisp sample code\n(print "Hello, Developer!")\n`,

  // LLVM IR
  llvm_ir: `Check back soon for the code snippet 😉`,

  // LOLCODE
  lolcode: `HAI 1.2\nVISIBLE "Hello, Developer!"\nKTHXBYE\n`,

  // Lua
  lua: `-- Lua sample code\nprint("Hello, Developer!")\n`,

  // MATLAB/Octave
  octave: `# Octave sample code\nprintf("Hello, Developer!\\n");\n`,

  // Nasm
  nasm: `; NASM sample code\nsection .data\n    hello db 'Hello, Developer!',0\n\nsection .text\n    global _start\n\n_start:\n    mov eax, 4\n    mov ebx, 1\n    mov ecx, hello\n    mov edx, 16\n    int 0x80\n\n    mov eax, 1\n    xor ebx, ebx\n    int 0x80\n`,

  // Nim
  nim: `# Nim sample code\necho "Hello, Developer!"\n`,

  // OCaml
  ocaml: `(* OCaml sample code *)\nprint_endline "Hello, Developer!";;\n`,

  // Osabie
  osabie: `# Osabie sample code\nsay "Hello, Developer!"\n`,

  // Paradoc
  paradoc: `# Paradoc sample code\n"Hello, Developer!"\n`,

  // Pascal
  pascal: `program Hello;\nbegin\n  writeln('Hello, Developer!');\nend.\n`,

  // Perl
  perl: `# Perl sample code\nprint "Hello, Developer!\\n";\n`,

  // PHP
  php: `<?php\n\n$name = 'Developer';\necho $name;\n`,

  // Pony
  ponylang: `actor Main\n  new create(env: Env) =>\n    env.out.print("Hello, Developer!")\n`,

  // PowerShell
  powershell: `# PowerShell sample code\nWrite-Host "Hello, Developer!"\n`,

  // Prolog
  prolog: `% Prolog sample code\nhello :- write('Hello, Developer!'), nl.\n`,

  // Pure
  pure: `//Pure sample code\nprintln("Hello, Developer!")\n`,

  // Pyth
  pyth: `# Pyth sample code\n"Hello, Developer!"\n`,

  // Python
  python: `# Python sample code\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Developer")\n`,

  // Python 2
  python2: `# Python 2 sample code\ndef greet(name):\n\tprint "Hello, " + name + "!"\n\ngreet("Developer")\n`,

  // Racket
  racket: `#lang racket\n(display "Hello, Developer!")\n`,

  // Raku
  raku: `# Raku sample code\nsay "Hello, Developer!";\n`,

  // Retina
  retina: `# Retina sample code\nHello, Developer!\n`,

  // Rockstar
  rockstar: `# Rockstar sample code\nListen to your heart\nPut your dreams first\nShout "Hello, Developer!"\n`,

  // Rscript
  rscript: `# R script sample code\ncat("Hello, Developer!\\n")\n`,

  // Ruby
  ruby: `# Ruby sample code\nputs "Hello, Developer!"\n`,

  // Rust
  rust: `//Rust sample code\nfn main() {\n\tprintln!("Hello, Developer!");\n}\n`,

  // Samarium
  samarium: `# Samarium sample code\nprint("Hello, Developer!")\n`,

  // Scala
  scala: `//Scala sample code\nobject HelloWorld extends App {\n\tprintln("Hello, Developer!")\n}\n`,

  // Smalltalk
  smalltalk: `# Smalltalk sample code\nTranscript show: 'Hello, Developer!'; cr.\n`,

  // SQLite3
  sqlite3: `-- SQLite3 sample code\nSELECT 'Hello, Developer!';\n`,

  // Swift
  swift: `//Swift sample code\nprint("Hello, Developer!")\n`,

  // TypeScript
  typescript: `//TypeScript sample code\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Developer" });\n`,

  // VHDL
  vhdl: `-- VHDL sample code\nentity HelloWorld is\nend HelloWorld;\n\narchitecture Behavioral of HelloWorld is\nbegin\n\tprocess\n\tbegin\n\t\treport "Hello, Developer!";\n\t\twait;\n\tend process;\nend Behavioral;\n`,

  // Visual Basic .NET
  vbnet: `//VB.NET sample code\nModule HelloWorld\n    Sub Main()\n        Console.WriteLine("Hello, Developer!")\n    End Sub\nEnd Module\n`,

  // Whitespace
  whitespace: `# Whitespace sample code\n\t\n \n\n \t \n \n\n\n\t \t\n\t \t\n\t \n \n\t\n`,

  // X++
  xpp: `// X++ sample code\nstatic void HelloWorld(Args _args)\n{\n\tinfo("Hello, Developer!");\n}\n`,

  // YAML
  yaml: `# YAML sample code\nmessage: "Hello, Developer!"\n`,

  // Zig
  zig: `//Zig sample code\nconst std = @import("std");\npub fn main() void {\n\tstd.debug.print("Hello, Developer!\\n", .{});\n}\n`,
};
