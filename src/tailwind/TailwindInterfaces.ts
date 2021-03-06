import TailWindConfigOther from 'tailwind.config';

const { theme } = TailWindConfigOther;

const { borderRadius, borderWidth, boxShadow, fontWeight, spacing } = theme;

export type LocationIdentifiers = 'l' | 'r' | 't' | 'b';

export type BorderRadiusTypes = keyof typeof borderRadius | boolean;

export type BorderTypes = keyof typeof borderWidth | boolean | LocationIdentifiers | 'l-0' | 'r-0' | 't-0' | 'b-0';

export type SizeTypes = 'xl' | 'sm' | 'md' | 'lg' | '2xl';

export type SpacingTypes = keyof typeof spacing;

export type GapTypes = SpacingTypes | boolean;

export type ShadowType = keyof typeof boxShadow | boolean;

export interface PaddingProps {
  p: SpacingTypes;
  py: SpacingTypes;
  px: SpacingTypes;
  pt: SpacingTypes;
  pr: SpacingTypes;
  pb: SpacingTypes;
  pl: SpacingTypes;
}

export interface MarginProps {
  m: SpacingTypes;
  my: SpacingTypes;
  mx: SpacingTypes;
  mt: SpacingTypes;
  mr: SpacingTypes;
  mb: SpacingTypes;
  ml: SpacingTypes;
}

export type DisplayTypes =
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'inline-block'
  | 'block'
  | 'table'
  | 'table-caption';

export type PositionType = 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';

export type FontTypes = keyof typeof fontWeight;
