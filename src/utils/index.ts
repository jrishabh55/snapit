export const baseCode = `function validateEmail(email) {
  if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(email)) {
    return true;
  }
  alert('Invalid e-mail address! Please enter again carefully!.');
  return false;
}

validateEmail('rishabh@codeation.io');
`;

export const themes: { id: string; name: string }[] = [
  {
    id: 'duotone-dark',
    name: 'Duotone Dark',
  },
  {
    id: 'duotone-light',
    name: 'Duotone Light',
  },
  {
    id: 'material',
    name: 'Material',
  },
  {
    id: 'material-darker',
    name: 'Material Darker',
  },
  {
    id: 'material-ocean',
    name: 'Material Ocean',
  },
  {
    id: 'material-palenight',
    name: 'Material Palenight',
  },
  {
    id: 'solarized',
    name: 'Solarized',
  },
  {
    id: 'cobalt',
    name: 'Cobalt',
  },
  {
    id: 'darcula',
    name: 'Darcula',
  },
  {
    id: 'dracula',
    name: 'Dracula',
  },
  {
    id: 'twilight',
    name: 'Twilight',
  },
];
