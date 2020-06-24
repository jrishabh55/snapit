import { ReactNode, CSSProperties, HTMLAttributes, FC, memo, useMemo, createElement, ReactHTML } from 'react';
import { ShadowType, DisplayTypes, BorderTypes } from '../TailwindInterfaces';

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  display?: DisplayTypes;
  shadowType?: ShadowType;
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
    shadowType = 'none',
    ...restProps
  }) => {
    const classes = useMemo(() => {
      const arr: string[] = [display, `shadow-${shadowType}`, `rounded-${rounded}`];
      if (className) arr.push(className);

      return arr.join(' ');
    }, [className, display, rounded, shadowType]);

    const BoxComponent = useMemo(() => {
      return createElement(componentType, { className: classes, ...restProps }, children);
    }, [componentType, classes, children, restProps]);

    return BoxComponent;
  }
);

export default Box;
