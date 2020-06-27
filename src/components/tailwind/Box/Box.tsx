import { ReactNode, CSSProperties, HTMLAttributes, FC, memo, useMemo, createElement, ReactHTML } from 'react';
import { ShadowType, DisplayTypes, BorderTypes, PositionType } from '../TailwindInterfaces';

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  display?: DisplayTypes;
  shadow?: ShadowType;
  position?: PositionType;
  children?: ReactNode;
  style?: CSSProperties;
  rounded?: BorderTypes;
  componentType?: keyof ReactHTML;
}

const Box: FC<BoxProps> = memo(
  ({
    children,
    componentType = 'div',
    rounded = 'none',
    className,
    display = 'flex',
    shadow = 'none',
    position,
    ...restProps
  }) => {
    const classes = useMemo(() => {
      const arr: string[] = [display, `shadow-${shadow}`, `rounded-${rounded}`];
      if (className) arr.push(className);
      if (position) arr.push(position);

      return arr.join(' ');
    }, [className, display, rounded, shadow, position]);

    const BoxComponent = useMemo(() => {
      return createElement(componentType, { className: classes, ...restProps }, children);
    }, [componentType, classes, children, restProps]);

    return BoxComponent;
  }
);

export default Box;
