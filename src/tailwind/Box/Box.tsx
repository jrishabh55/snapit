import { ReactNode, CSSProperties, AllHTMLAttributes, FC, memo, useMemo, createElement, ReactHTML } from 'react';
import {
  ShadowType,
  DisplayTypes,
  BorderTypes,
  BorderRadiusTypes,
  PositionType,
  GapTypes,
  PaddingProps,
} from '../TailwindInterfaces';
import { classObjToString } from '../utils';

export interface BoxProps<T extends HTMLElement = HTMLElement> extends AllHTMLAttributes<T>, Partial<PaddingProps> {
  className?: string;
  display?: DisplayTypes;
  shadow?: ShadowType | boolean;
  position?: PositionType;
  children?: ReactNode;
  style?: CSSProperties;
  rounded?: BorderRadiusTypes | boolean;
  border?: BorderTypes | boolean;
  gap?: GapTypes;
  componentType?: keyof ReactHTML;
}

const Box: FC<BoxProps> = memo(
  ({
    display = 'flex',
    componentType = 'div',
    children,
    rounded,
    className,
    shadow,
    border,
    gap,
    position,
    p,
    px,
    py,
    pt,
    pr,
    pl,
    pb,
    ...restProps
  }) => {
    const classes = useMemo(() => {
      return classObjToString({
        className,
        display,
        rounded,
        shadow,
        position,
        border,
        gap,
        p,
        px,
        py,
        pt,
        pr,
        pl,
        pb,
      });
    }, [className, display, rounded, shadow, position, border, gap, p, px, py, pt, pr, pl, pb]);

    const BoxComponent = useMemo(() => {
      return createElement(componentType, { className: classes, ...restProps }, children);
    }, [componentType, classes, children, restProps]);

    return BoxComponent;
  }
);

export default Box;
