import capitalize from 'lodash/capitalize';
import * as hljsThemes from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const baseCode = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}
`;


export const themes: { id: string, name: string }[] = [
  {
    id: 'material',
    name: 'Material'
  },
  {
    id: 'material-darker',
    name: 'Material Darker'
  },
  {
    id: 'material-ocean',
    name: 'Material Ocean'
  },
  {
    id: 'material-palenight',
    name: 'Material Palenight'
  },
  {
    id: 'solarized',
    name: 'Solarized'
  },
  {
    id: 'cobalt',
    name: 'Cobalt'
  },
  {
    id: 'darcula',
    name: 'Darcula'
  },
  {
    id: 'dracula',
    name: 'Dracula'
  },
  {
    id: 'twilight',
    name: 'Twilight'
  },
];

export const LANGUAGES = [
  {
    name: 'Auto',
    mode: 'auto',
    id: 1,
  },
  {
    name: 'Apache',
    mode: 'apache',
    mime: 'text/apache',
    custom: true,
    highlight: true,
    id: 2,
  },
  {
    name: 'Bash',
    mode: 'shell',
    mime: 'application/x-sh',
    highlight: true,
    id: 3,
  },
  {
    name: 'Plain Text',
    mode: 'text',
    id: 4,
  },
  {
    name: 'C',
    mode: 'clike',
    mime: 'text/x-csrc',
    short: 'c',
    id: 5,
  },
  {
    name: 'C++',
    mode: 'clike',
    mime: 'text/x-c++src',
    short: 'c-like',
    highlight: true,
    id: 6,
  },
  {
    name: 'C#',
    mode: 'clike',
    mime: 'text/x-csharp',
    short: 'csharp',
    highlight: true,
    id: 7,
  },
  {
    name: 'Clojure',
    mode: 'clojure',
    highlight: true,
    id: 8,
  },
  {
    name: 'COBOL',
    mode: 'cobol',
    id: 9,
  },
  {
    name: 'CoffeeScript',
    mode: 'coffeescript',
    highlight: true,
    id: 10,
  },
  {
    name: 'Crystal',
    mode: 'crystal',
    highlight: true,
    id: 11,
  },
  {
    name: 'CSS',
    mode: 'css',
    highlight: true,
    id: 12,
  },
  {
    name: 'D',
    mode: 'd',
    highlight: true,
    id: 13,
  },
  {
    name: 'Dart',
    mode: 'dart',
    highlight: true,
    id: 14,
  },
  {
    name: 'Diff',
    mode: 'diff',
    mime: 'text/x-diff',
    highlight: true,
    id: 15,
  },
  {
    name: 'Django',
    mode: 'django',
    highlight: true,
    id: 16,
  },
  {
    name: 'Docker',
    mode: 'dockerfile',
    highlight: true,
    id: 17,
  },
  {
    name: 'Elixir',
    mode: 'elixir',
    custom: true,
    highlight: true,
    id: 18,
  },
  {
    name: 'Elm',
    mode: 'elm',
    highlight: true,
    id: 19,
  },
  {
    name: 'Erlang',
    mode: 'erlang',
    highlight: true,
    id: 20,
  },
  {
    name: 'Fortran',
    mode: 'fortran',
    highlight: true,
    id: 21,
  },
  {
    name: 'Gherkin',
    mode: 'gherkin',
    highlight: true,
    id: 22,
  },
  {
    name: 'GraphQL',
    mode: 'graphql',
    custom: true,
    id: 23,
  },
  {
    name: 'Go',
    mode: 'go',
    mime: 'text/x-go',
    highlight: true,
    id: 24,
  },
  {
    name: 'Groovy',
    mode: 'groovy',
    highlight: true,
    id: 25,
  },
  {
    name: 'Handlebars',
    mode: 'handlebars',
    highlight: true,
    id: 26,
  },
  {
    name: 'Haskell',
    mode: 'haskell',
    highlight: true,
    id: 27,
  },
  {
    name: 'HTML/XML',
    mode: 'htmlmixed',
    id: 28,
  },
  {
    name: 'Java',
    mode: 'clike',
    mime: 'text/x-java',
    short: 'java',
    highlight: true,
    id: 29,
  },
  {
    name: 'JavaScript',
    mode: 'javascript',
    short: 'javascript',
    highlight: true,
    id: 30,
  },
  {
    name: 'JSON',
    mode: 'javascript',
    mime: 'application/json',
    short: 'json',
    highlight: true,
    id: 31,
  },
  {
    name: 'JSX',
    mode: 'jsx',
    short: 'jsx',
    id: 32,
  },
  {
    name: 'Julia',
    mode: 'julia',
    highlight: true,
    id: 33,
  },
  {
    name: 'Kotlin',
    mode: 'clike',
    mime: 'text/x-kotlin',
    short: 'kotlin',
    highlight: true,
    id: 34,
  },
  {
    name: 'LaTeX',
    mode: 'stex',
    short: 'latex',
    highlight: true,
    id: 35,
  },
  {
    name: 'Lisp',
    mode: 'commonlisp',
    short: 'lisp',
    highlight: true,
    id: 36,
  },
  {
    name: 'Lua',
    mode: 'lua',
    highlight: true,
    id: 37,
  },
  {
    name: 'Markdown',
    mode: 'markdown',
    highlight: true,
    id: 38,
  },
  {
    name: 'Mathematica',
    mode: 'mathematica',
    highlight: true,
    id: 39,
  },
  {
    name: 'MATLAB/Octave',
    mode: 'octave',
    mime: 'text/x-octave',
    short: 'matlab',
    hightlight: true,
    id: 40,
  },
  {
    name: 'MySQL',
    mode: 'sql',
    mime: 'text/x-mysql',
    short: 'mysql',
    id: 41,
  },
  {
    name: 'N-Triples',
    mode: 'ntriples',
    mime: 'application/n-triples',
    id: 42,
  },
  {
    name: 'NGINX',
    mode: 'nginx',
    highlight: true,
    id: 43,
  },
  {
    name: 'Nim',
    mode: 'nim',
    custom: true,
    highlight: true,
    id: 44,
  },
  {
    name: 'Objective C',
    mode: 'clike',
    mime: 'text/x-objectivec',
    short: 'objectivec',
    highlight: true,
    id: 45,
  },
  {
    name: 'OCaml/F#',
    mode: 'mllike',
    short: 'ocaml',
    highlight: true,
    id: 46,
  },
  {
    name: 'Pascal',
    mode: 'pascal',
    id: 47,
  },
  {
    name: 'Perl',
    mode: 'perl',
    highlight: true,
    id: 48,
  },
  {
    name: 'PHP',
    mode: 'php',
    mime: 'text/x-php',
    short: 'php',
    highlight: true,
    id: 49,
  },
  {
    name: 'PowerShell',
    mode: 'powershell',
    highlight: true,
    id: 50,
  },
  {
    name: 'Python',
    mode: 'python',
    highlight: true,
    id: 51,
  },
  {
    name: 'R',
    mode: 'r',
    highlight: true,
    id: 52,
  },
  {
    name: 'RISC-V',
    mode: 'riscv',
    custom: true,
    id: 53,
  },
  {
    name: 'Ruby',
    mode: 'ruby',
    highlight: true,
    id: 54,
  },
  {
    name: 'Rust',
    mode: 'rust',
    highlight: true,
    id: 55,
  },
  {
    name: 'Sass',
    mode: 'sass',
    id: 56,
  },
  {
    name: 'Scala',
    mode: 'clike',
    mime: 'text/x-scala',
    short: 'scala',
    highlight: true,
    id: 57,
  },
  {
    name: 'Smalltalk',
    mode: 'smalltalk',
    highlight: true,
    id: 58,
  },
  {
    name: 'Solidity',
    mode: 'solidity',
    custom: true,
    id: 59,
  },
  {
    name: 'SPARQL',
    mode: 'sparql',
    mime: 'application/sparql-query',
    id: 60,
  },
  {
    name: 'SQL',
    mode: 'sql',
    highlight: true,
    id: 61,
  },
  {
    name: 'Stylus',
    mode: 'stylus',
    mime: 'stylus',
    highlight: true,
    id: 62,
  },
  {
    name: 'Swift',
    mode: 'swift',
    highlight: true,
    id: 63,
  },
  {
    name: 'TCL',
    mode: 'tcl',
    highlight: true,
    id: 64,
  },
  {
    name: 'TOML',
    mode: 'toml',
    id: 65,
  },
  {
    name: 'Turtle',
    mode: 'turtle',
    mime: 'text/turtle',
    id: 66,
  },
  {
    name: 'TypeScript',
    mode: 'javascript',
    mime: 'application/typescript',
    short: 'typescript',
    highlight: true,
    id: 67,
  },
  {
    name: 'TSX',
    mode: 'jsx',
    mime: 'text/typescript-jsx',
    short: 'tsx',
    id: 68,
  },
  {
    name: 'Twig',
    mode: 'twig',
    mime: 'text/x-twig',
    highlight: true,
    id: 69,
  },
  {
    name: 'VB.NET',
    mode: 'vb',
    id: 70,
  },
  {
    name: 'Verilog',
    mode: 'verilog',
    highlight: true,
    id: 71,
  },
  {
    name: 'VHDL',
    mode: 'vhdl',
    highlight: true,
    id: 72,
  },
  {
    name: 'Vue',
    mode: 'vue',
    id: 73,
  },
  {
    name: 'XQuery',
    mode: 'xquery',
    highlight: true,
    id: 74,
  },
  {
    name: 'YAML',
    mode: 'yaml',
    highlight: true,
    id: 75,
  },
];
