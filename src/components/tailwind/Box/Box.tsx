import { ReactNode, CSSProperties, AllHTMLAttributes, FC, memo, useMemo, createElement, ReactHTML } from 'react';
import { ShadowType, DisplayTypes, BorderTypes, BorderRadiusTypes, PositionType } from '../TailwindInterfaces';
import { classObjToString } from '../utils';

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
      return classObjToString({ className, display, rounded, shadow, position, border });
    }, [className, display, rounded, shadow, position, border]);

    const BoxComponent = useMemo(() => {
      return createElement(componentType, { className: classes, ...restProps }, children);
    }, [componentType, classes, children, restProps]);

    return BoxComponent;
  }
);

export default Box;
