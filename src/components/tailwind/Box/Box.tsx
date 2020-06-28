import { ReactNode, CSSProperties, AllHTMLAttributes, FC, memo, useMemo, createElement, ReactHTML } from 'react';
import { ShadowType, DisplayTypes, BorderTypes, BorderRadiusTypes, PositionType } from '../TailwindInterfaces';

interface BoxProps<T extends HTMLElement = HTMLElement> extends AllHTMLAttributes<T> {
  className?: string;
  display?: DisplayTypes;
  shadow?: ShadowType | boolean;
  position?: PositionType;
  children?: ReactNode;
  style?: CSSProperties;
  rounded?: BorderRadiusTypes | boolean;
  border?: BorderTypes | boolean;
  componentType?: keyof ReactHTML;
}

const Box: FC<BoxProps> = memo(
  ({
    children,
    componentType = 'div',
    rounded = false,
    className,
    display = 'flex',
    shadow = false,
    border = false,
    position,
    ...restProps
  }) => {
    const classes = useMemo(() => {
      const arr: string[] = [display];
      if (className) arr.push(className);
      if (position) arr.push(position);
      if (shadow) {
        if (typeof shadow === 'string') arr.push(`shadow-${shadow}`);
        else arr.push(`shadow`);
      }
      if (rounded) {
        if (typeof rounded === 'string') arr.push(`rounded-${rounded}`);
        else arr.push(`rounded`);
      }

      if (border) {
        if (typeof border === 'string') arr.push(`border-${border}`);
        else arr.push(`border`);
      }

      return arr.join(' ');
    }, [className, display, rounded, shadow, position, border]);

    const BoxComponent = useMemo(() => {
      return createElement(componentType, { className: classes, ...restProps }, children);
    }, [componentType, classes, children, restProps]);

    return BoxComponent;
  }
);

export default Box;
