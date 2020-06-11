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
  },
  {
    name: 'Apache',
    mode: 'apache',
    mime: 'text/apache',
    custom: true,
    highlight: true,
  },
  {
    name: 'Bash',
    mode: 'shell',
    mime: 'application/x-sh',
    highlight: true,
  },
  {
    name: 'Plain Text',
    mode: 'text',
  },
  {
    name: 'C',
    mode: 'clike',
    mime: 'text/x-csrc',
    short: 'c',
  },
  {
    name: 'C++',
    mode: 'clike',
    mime: 'text/x-c++src',
    short: 'c-like',
    highlight: true,
  },
  {
    name: 'C#',
    mode: 'clike',
    mime: 'text/x-csharp',
    short: 'csharp',
    highlight: true,
  },
  {
    name: 'Clojure',
    mode: 'clojure',
    highlight: true,
  },
  {
    name: 'COBOL',
    mode: 'cobol',
  },
  {
    name: 'CoffeeScript',
    mode: 'coffeescript',
    highlight: true,
  },
  {
    name: 'Crystal',
    mode: 'crystal',
    highlight: true,
  },
  {
    name: 'CSS',
    mode: 'css',
    highlight: true,
  },
  {
    name: 'D',
    mode: 'd',
    highlight: true,
  },
  {
    name: 'Dart',
    mode: 'dart',
    highlight: true,
  },
  {
    name: 'Diff',
    mode: 'diff',
    mime: 'text/x-diff',
    highlight: true,
  },
  {
    name: 'Django',
    mode: 'django',
    highlight: true,
  },
  {
    name: 'Docker',
    mode: 'dockerfile',
    highlight: true,
  },
  {
    name: 'Elixir',
    mode: 'elixir',
    custom: true,
    highlight: true,
  },
  {
    name: 'Elm',
    mode: 'elm',
    highlight: true,
  },
  {
    name: 'Erlang',
    mode: 'erlang',
    highlight: true,
  },
  {
    name: 'Fortran',
    mode: 'fortran',
    highlight: true,
  },
  {
    name: 'Gherkin',
    mode: 'gherkin',
    highlight: true,
  },
  {
    name: 'GraphQL',
    mode: 'graphql',
    custom: true,
  },
  {
    name: 'Go',
    mode: 'go',
    mime: 'text/x-go',
    highlight: true,
  },
  {
    name: 'Groovy',
    mode: 'groovy',
    highlight: true,
  },
  {
    name: 'Handlebars',
    mode: 'handlebars',
    highlight: true,
  },
  {
    name: 'Haskell',
    mode: 'haskell',
    highlight: true,
  },
  {
    name: 'HTML/XML',
    mode: 'htmlmixed',
  },
  {
    name: 'Java',
    mode: 'clike',
    mime: 'text/x-java',
    short: 'java',
    highlight: true,
  },
  {
    name: 'JavaScript',
    mode: 'javascript',
    short: 'javascript',
    highlight: true,
  },
  {
    name: 'JSON',
    mode: 'javascript',
    mime: 'application/json',
    short: 'json',
    highlight: true,
  },
  {
    name: 'JSX',
    mode: 'jsx',
    short: 'jsx',
  },
  {
    name: 'Julia',
    mode: 'julia',
    highlight: true,
  },
  {
    name: 'Kotlin',
    mode: 'clike',
    mime: 'text/x-kotlin',
    short: 'kotlin',
    highlight: true,
  },
  {
    name: 'LaTeX',
    mode: 'stex',
    short: 'latex',
    highlight: true,
  },
  {
    name: 'Lisp',
    mode: 'commonlisp',
    short: 'lisp',
    highlight: true,
  },
  {
    name: 'Lua',
    mode: 'lua',
    highlight: true,
  },
  {
    name: 'Markdown',
    mode: 'markdown',
    highlight: true,
  },
  {
    name: 'Mathematica',
    mode: 'mathematica',
    highlight: true,
  },
  {
    name: 'MATLAB/Octave',
    mode: 'octave',
    mime: 'text/x-octave',
    short: 'matlab',
    hightlight: true,
  },
  {
    name: 'MySQL',
    mode: 'sql',
    mime: 'text/x-mysql',
    short: 'mysql',
  },
  {
    name: 'N-Triples',
    mode: 'ntriples',
    mime: 'application/n-triples',
  },
  {
    name: 'NGINX',
    mode: 'nginx',
    highlight: true,
  },
  {
    name: 'Nim',
    mode: 'nim',
    custom: true,
    highlight: true,
  },
  {
    name: 'Objective C',
    mode: 'clike',
    mime: 'text/x-objectivec',
    short: 'objectivec',
    highlight: true,
  },
  {
    name: 'OCaml/F#',
    mode: 'mllike',
    short: 'ocaml',
    highlight: true,
  },
  {
    name: 'Pascal',
    mode: 'pascal',
  },
  {
    name: 'Perl',
    mode: 'perl',
    highlight: true,
  },
  {
    name: 'PHP',
    mode: 'php',
    mime: 'text/x-php',
    short: 'php',
    highlight: true,
  },
  {
    name: 'PowerShell',
    mode: 'powershell',
    highlight: true,
  },
  {
    name: 'Python',
    mode: 'python',
    highlight: true,
  },
  {
    name: 'R',
    mode: 'r',
    highlight: true,
  },
  {
    name: 'RISC-V',
    mode: 'riscv',
    custom: true,
  },
  {
    name: 'Ruby',
    mode: 'ruby',
    highlight: true,
  },
  {
    name: 'Rust',
    mode: 'rust',
    highlight: true,
  },
  {
    name: 'Sass',
    mode: 'sass',
  },
  {
    name: 'Scala',
    mode: 'clike',
    mime: 'text/x-scala',
    short: 'scala',
    highlight: true,
  },
  {
    name: 'Smalltalk',
    mode: 'smalltalk',
    highlight: true,
  },
  {
    name: 'Solidity',
    mode: 'solidity',
    custom: true,
  },
  {
    name: 'SPARQL',
    mode: 'sparql',
    mime: 'application/sparql-query',
  },
  {
    name: 'SQL',
    mode: 'sql',
    highlight: true,
  },
  {
    name: 'Stylus',
    mode: 'stylus',
    mime: 'stylus',
    highlight: true,
  },
  {
    name: 'Swift',
    mode: 'swift',
    highlight: true,
  },
  {
    name: 'TCL',
    mode: 'tcl',
    highlight: true,
  },
  {
    name: 'TOML',
    mode: 'toml',
  },
  {
    name: 'Turtle',
    mode: 'turtle',
    mime: 'text/turtle',
  },
  {
    name: 'TypeScript',
    mode: 'javascript',
    mime: 'application/typescript',
    short: 'typescript',
    highlight: true,
  },
  {
    name: 'TSX',
    mode: 'jsx',
    mime: 'text/typescript-jsx',
    short: 'tsx',
  },
  {
    name: 'Twig',
    mode: 'twig',
    mime: 'text/x-twig',
    highlight: true,
  },
  {
    name: 'VB.NET',
    mode: 'vb',
  },
  {
    name: 'Verilog',
    mode: 'verilog',
    highlight: true,
  },
  {
    name: 'VHDL',
    mode: 'vhdl',
    highlight: true,
  },
  {
    name: 'Vue',
    mode: 'vue',
  },
  {
    name: 'XQuery',
    mode: 'xquery',
    highlight: true,
  },
  {
    name: 'YAML',
    mode: 'yaml',
    highlight: true,
  },
];
