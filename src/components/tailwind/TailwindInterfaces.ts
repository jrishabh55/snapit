import TailWindConfigOther from 'tailwind.config';

const { theme } = TailWindConfigOther;

const { borderRadius, boxShadow, fontWeight } = theme;

export type BorderTypes = keyof typeof borderRadius;

export type SizeTypes = 'xl' | 'sm' | 'md' | 'lg' | '2xl';

export type ShadowType = keyof typeof boxShadow;

export type DisplayTypes =
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'inline-block'
  | 'block'
  | 'table'
  | 'table-caption';

export type FontTypes = keyof typeof fontWeight;
