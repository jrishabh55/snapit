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

