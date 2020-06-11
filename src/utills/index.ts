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


export const themes: { name: string, value: string }[] = Object.keys(hljsThemes).map(th => ({ name: capitalize(th), value: th }));
